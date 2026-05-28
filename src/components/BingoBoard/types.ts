import type { BingoState } from "@/types/bingo"

export interface BingoBoardProps extends BingoState {
  onNumberToggle?: (number: number) => void
}