const jugadores = [
    { id: 1, nombre: "Lionel Messi", equipo: "Inter Miami", goles: 30 },
    { id: 2, nombre: "Cristiano Ronaldo", equipo: "Al-Nassr", goles: 25 },
    { id: 3, nombre: "Kylian Mbappé", equipo: "Paris Saint-Germain", goles: 35 },
    { id: 4, nombre: "Erling Haaland", equipo: "Manchester City", goles: 40 },
  ]

  export function VerJugadores(){
        jugadores.forEach((jugador) => {console.log(jugador.nombre)});

        return (
            <div style={{ border: '1px solid black', padding: '10px' }}>
            <p>Consulta la consola para ver los nombres de los jugadores.</p>
            </div>
        );             
  }
  
 