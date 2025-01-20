import { useState, useEffect } from "react";

export default function MostrarPublicFetch() {
  const [contenido, setContenido] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContenido() {
      try {
        const response = await fetch("http://app-cultiva.local/public");
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }
        const data = await response.json(); // Si es JSON
        setContenido(data); // Guarda la respuesta en el estado
      } catch (err) {
        setError(err.message); // Captura errores
      } finally {
        setLoading(false); // Indica que ha terminado de cargar
      }
    }

    fetchContenido();
  }, []);

  if (loading) return <p>Cargando contenido de /public...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Contenido de /public</h2>
      <pre>{JSON.stringify(contenido, null, 2)}</pre>{" "}
      {/* Muestra contenido formateado */}
    </div>
  );
}
