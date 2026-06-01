interface DrawCounterProps {
  total: number
}

export function DrawCounter({
  total,
}: DrawCounterProps) {
  return (
    <section className="draw-counter">
      <span>Total Sorteados: </span>

      <strong>{total}</strong>
    </section>
  )
}