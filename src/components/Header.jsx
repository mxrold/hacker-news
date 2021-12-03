import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.css'

const Header = () => {
  return (
    <header className="Header container-padding">
      <div className="Header__data container-width">
        <Link to="/">
          <h1>HACKER NEWS</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
