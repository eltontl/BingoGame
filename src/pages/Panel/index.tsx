import { Link } from 'react-router'
import './styles.css'

function PanelPage() {
  return (
    <div>
      <h1>Panel</h1>
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </div>
  )  
}

export default PanelPage