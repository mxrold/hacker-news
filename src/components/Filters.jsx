import Select from './Select'
import Search from './Search'
import '../assets/styles/components/Filters.css'

const Filters = ({ onClick }) => {
  return (
    <div className="Filters container-width">
      <Select onClick={onClick} />
      <Search />
    </div>
  )
}

export default Filters