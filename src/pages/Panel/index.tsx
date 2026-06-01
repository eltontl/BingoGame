import Menu from "@/components/Menu";
import { BingoBoard } from "@/components/BingoBoard";
import { DrawCounter } from "@/components/DrawCounter"
import { LastNumberCard } from "@/components/LastNumberCard"
import { NumberHistory } from "@/components/NumberHistory"

import type { BingoState } from "@/types/bingo"

import "./styles.css"

interface PanelProps { bingoState: BingoState }

const Panel = ({ bingoState, }: PanelProps) => {

  return (
    <>
      <Menu />

      <main className="panel-page">
        <section className="panel-top">
          <LastNumberCard
            number={
              bingoState.currentNumber  
            }
          />

          <DrawCounter
            total={
              bingoState.drawnNumbers.length
            }
          />
        </section>

        <section className="panel-middle">
          <NumberHistory
            numbers={bingoState.lastNumbers}
          />
        </section>

        <section className="panel-board">
          <BingoBoard
            drawnNumbers={
              bingoState.drawnNumbers
            }
            readOnly
          />
        </section>
      </main>
    </>
  );
};

export default Panel;