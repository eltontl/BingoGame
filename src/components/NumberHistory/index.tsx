interface NumberHistoryProps {
  numbers: number[]
}

export function NumberHistory({
  numbers,
}: NumberHistoryProps) {
  return (
    <section className="history">
      <h2>Últimos Sorteados</h2>

      <div className="history-grid">
        {numbers.map(number => (
          <div
            key={number}
            className="history-item"
          >
            {number}
          </div>
        ))}
      </div>
    </section>
  )
}