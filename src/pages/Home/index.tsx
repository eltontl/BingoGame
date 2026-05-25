// src/pages/Home/index.tsx

import { Link } from 'react-router'
import './styles.css'

function HomePage() {
  return (
    <div>
      <h1>Bingo Game</h1>

      <Link to="/control">
        <button>Controle</button>
      </Link>

      <Link to="/panel">
        <button>Painel</button>
      </Link>
    </div>
  )
}

export default HomePage