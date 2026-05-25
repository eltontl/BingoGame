import { Link } from "react-router"

function ControlPage() {
  return (
    <div>
      <h1>Panel</h1>
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </div>
  )
}

export default ControlPage