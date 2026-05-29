import { useState } from "react"

import Menu from "@/components/Menu"
import { BingoBoard } from "@/components/BingoBoard"
import type { BingoState } from "@/types/bingo"

import "./styles.css"

function Control() {
  const [bingoState, setBingoState] = useState<BingoState>({
    drawnNumbers: [],
    lastNumbers: [],
    currentNumber: null,
  })

  function handleToggleNumber(number: number) {
    setBingoState((previous) => {
      const alreadyDrawn =
      previous.drawnNumbers.includes(number)
      if (alreadyDrawn) {
        return {
          ...previous,
          drawnNumbers: previous.drawnNumbers.filter(
            (item) => item !== number
          ),
        }
      }
      
      return {
        drawnNumbers: [...previous.drawnNumbers, number].sort((a, b) => a - b),
        lastNumbers: [number, ...previous.lastNumbers].slice(0, 10),
        currentNumber: number,
      }
    })
  }

  function handleNewGame() {
    const confirmed = window.confirm(
      "Deseja realmente iniciar uma nova rodada?\n\nTodos os números marcados serão removidos."
    )

    if (!confirmed) {
      return
    }

    setBingoState(
      {
        drawnNumbers: [],
        lastNumbers: [],
        currentNumber: null,
      }
    )
  }

  return (
    <>
      <Menu />

      <main className="control-page">
        <div className="control-page__actions">
          <button
            type="button"
            className="control-page__new-game-button"
            onClick={handleNewGame}
          >
            Nova Rodada
          </button>
        </div>

        <div className="control-page__board">
          <BingoBoard
          drawnNumbers={bingoState.drawnNumbers}
          onNumberToggle={handleToggleNumber}
          />
        </div>
      </main>
    </>
  )
}

export default Control