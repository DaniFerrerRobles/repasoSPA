  const jugadores = [
    { id: 1, nombre: "Lionel Messi", equipo: "Inter Miami", goles: 30 },
    { id: 2, nombre: "Cristiano Ronaldo", equipo: "Al-Nassr", goles: 25 },
    { id: 3, nombre: "Kylian Mbappé", equipo: "Paris Saint-Germain", goles: 35 },
    { id: 4, nombre: "Erling Haaland", equipo: "Manchester City", goles: 40 },
  ];

  export function VerificarGoles(){
      const algunJugadorConMuchosGoles = jugadores.some((jugador) => jugador.goles > 35);

      const todosTienenMuchosGoles = jugadores.every((jugador) => jugador.goles > 20);

      return (
        <div>
          <h1>Resultados</h1>
          <p>¿Algún jugador tiene más de 35 goles? {algunJugadorConMuchosGoles ? "Sí" : "No"}</p>

          <p>¿Todos los jugadores tienen más de 20 goles? {todosTienenMuchosGoles ? "Sí" : "No"}</p>
        </div>    
      )   
  }