import Select from './Select'
import Search from './Search'
import '../assets/styles/components/Filters.css'

const Filters = ({ onClick, category }) => {
  return (
    <div className="Filters container-width">
      <Select onClick={onClick} category={category} />
      <Search />
    </div>
  )
}

export default Filters