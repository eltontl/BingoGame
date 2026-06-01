interface LastNumberCardProps {
  number: number | null
}

export function LastNumberCard({
  number,
}: LastNumberCardProps) {
  return (
    <section className="last-number-card">
      <span className="label">
        Último Número
      </span>

      <div className="number">
        {number ?? "--"}
      </div>
    </section>
  )
}