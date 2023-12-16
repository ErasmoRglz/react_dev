  import { WINNER_COMBOS } from "../constants"
  
export  const checkWinnerFrom = (boardToCheck) => {
      // Revisamos todas las configuraciones ganadoras
      // Para ver si X u O gano
      for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
      boardToCheck[a] && // 0 --> x u o
      boardToCheck[a] == boardToCheck[b] && // 0 y 3 -> x -> x u o -> o
      boardToCheck[a] == boardToCheck[c]
    ) {
      return boardToCheck[a] // x u o
    }
  }
  // Si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // Revisamos si hay un empate
  // si no hay mas espacio vacios
  // en el tablero
  return newBoard.every((square) => square !== null)
}