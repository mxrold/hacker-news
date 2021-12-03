import { NavLink} from 'react-router-dom'

const NavbarLinks = ({ title, path }) => {
  return (
    <NavLink className="Navbar__links--item" to={path}>
      {title}
    </NavLink>
  )
}

export default NavbarLinks