import { Link } from 'react-router-dom'
import '../assets/styles/pages/NotFound.css'

const NotFound = () => {
  return (
    <section className="NotFound">
      <h2>Oops! We couldn't find this page 🤯</h2>
      <Link to="/">Go back</Link>
    </section>
  )
}

export default NotFound
