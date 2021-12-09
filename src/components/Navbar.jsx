import NavbarLinks from './NavbarLinks'
import '../assets/styles/components/Navbar.css'

const Navbar = () => {
  const links = [
    {
      title: 'All',
      path: '/'
    },
    {
      title: 'My faves',
      path: '/favorites'
    }
  ]

  return (
    <section className='Navbar'>
      <nav className='Navbar__links'>
        {
          links.map(item => <NavbarLinks key={item.title} {...item} />)
        }
      </nav>
    </section>
  )
}

export default Navbar
