const jugadores = [
    { id: 1, nombre: "Lionel Messi", equipo: "Inter Miami", goles: 30 },
    { id: 2, nombre: "Cristiano Ronaldo", equipo: "Al-Nassr", goles: 25 },
    { id: 3, nombre: "Kylian Mbappé", equipo: "Paris Saint-Germain", goles: 35 },
    { id: 4, nombre: "Erling Haaland", equipo: "Manchester City", goles: 40 },
  ];

  export function BuscarJugador(){
    const jugadorEncontrado = jugadores.find((jugador) => jugador.equipo === "Manchester City");
    
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}>
            <p>
                {jugadorEncontrado ? `El jugador es ${jugadorEncontrado.nombre}, con ${jugadorEncontrado.goles} goles en ${jugadorEncontrado.equipo}.`
                : "No se encontró ningún jugador en este equipo."}
            </p>
        </div>
      );           
  }
  

  