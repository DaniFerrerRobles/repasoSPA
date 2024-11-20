  const jugadores = [
    { id: 1, nombre: "Lionel Messi", equipo: "Inter Miami", goles: 30 },
    { id: 2, nombre: "Cristiano Ronaldo", equipo: "Al-Nassr", goles: 25 },
    { id: 3, nombre: "Kylian Mbappé", equipo: "Paris Saint-Germain", goles: 35 },
    { id: 4, nombre: "Erling Haaland", equipo: "Manchester City", goles: 40 },
  ];

export function JugadoresConPocosGoles() {
    const jugadoresFiltrados = jugadores.filter(jugador => jugador.goles < 30);
  
    return (
      <div style={{ border: '1px solid black', padding: '10px' }}>
        {jugadoresFiltrados.map((jugador) => (
          <p key={jugador.id}>{jugador.nombre} - {jugador.equipo} - {jugador.goles}</p>
        ))}
      </div>
    );
  }