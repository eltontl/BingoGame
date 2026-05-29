// src/types/bingo.ts

export interface BingoState {
  drawnNumbers: number[]
  lastNumbers: number[]
  currentNumber: number | null
}