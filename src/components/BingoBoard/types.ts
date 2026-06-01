export interface BingoBoardProps {
  drawnNumbers: number[]
  onNumberToggle?: (number: number) => void

  readOnly?: boolean
}