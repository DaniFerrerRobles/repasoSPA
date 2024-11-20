import React from "react";

  const jugadores = [
    { id: 1, nombre: "Lionel Messi", equipo: "Inter Miami" },
    { id: 2, nombre: "Cristiano Ronaldo", equipo: "Al-Nassr" },
    { id: 3, nombre: "Kylian Mbappé", equipo: "Real Madrid" },
    { id: 4, nombre: "Erling Haaland", equipo: "Manchester City" },
  ];

  export function ListaFutbolistas() {
    return (
        <div>
        <h1>Lista de Jugadores de Fútbol</h1>
        <ul>
            {jugadores.map((jugador) => (
            <li key={jugador.id}>
                {jugador.nombre} - {jugador.equipo}
            </li>
            ))}
        </ul>
        </div>
    );      
  }
