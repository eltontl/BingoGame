import Menu from "@/components/Menu";

import { useState } from "react"
import { BingoBoard } from "@/components/BingoBoard"

import "./styles.css"

export function Control() {
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])

  function handleToggleNumber(number: number) {
    setDrawnNumbers((previous) => {
      if (previous.includes(number)) {
        return previous.filter((item) => item !== number)
      }

      return [...previous, number].sort((a, b) => a - b)
    })
  }

  return (
    <>
      <Menu />

      <main className="control-page">
      <div className="control-page__board">
        <BingoBoard
          drawnNumbers={drawnNumbers}
          onNumberToggle={handleToggleNumber}
        />
      </div>
      </main>
    </>
    
    
  )
}