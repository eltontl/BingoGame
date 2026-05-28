import type { BingoBoardProps } from "@/components/BingoBoard/types"

import "./styles.css"

const rows = [
  {
    letter: "B",
    numbers: Array.from({ length: 15 }, (_, index) => index + 1),
  },
  {
    letter: "I",
    numbers: Array.from({ length: 15 }, (_, index) => index + 16),
  },
  {
    letter: "N",
    numbers: Array.from({ length: 15 }, (_, index) => index + 31),
  },
  {
    letter: "G",
    numbers: Array.from({ length: 15 }, (_, index) => index + 46),
  },
  {
    letter: "O",
    numbers: Array.from({ length: 15 }, (_, index) => index + 61),
  },
]

export function BingoBoard({
  drawnNumbers,
  onNumberToggle,
}: BingoBoardProps) {
  const isDrawn = (number: number) =>
    drawnNumbers.includes(number)

  return (
    <section className="bingo-board">
      <header className="bingo-board__header">
        <h2>Painel do Bingo</h2>

        <span>
          {drawnNumbers.length} números sorteados
        </span>
      </header>

      <div className="bingo-board__rows">
        {rows.map((row) => (
          <div
            key={row.letter}
            className="bingo-board__row"
          >
            <div className="bingo-board__letter">
              {row.letter}
            </div>

            <div className="bingo-board__numbers">
              {row.numbers.map((number) => (
                <button
                  key={number}
                  type="button"
                  className={`bingo-board__number ${
                    isDrawn(number) ? "active" : ""
                  }`}
                  onClick={() =>
                    onNumberToggle?.(number)
                  }
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};