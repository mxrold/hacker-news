import Select from './Select'
import Search from './Search'
import '../assets/styles/components/Filters.css'

const Filters = ({ onClick, onChange, query, category }) => {
  return (
    <div className="Filters container-width">
      <Select onClick={onClick} category={category} />
      <Search onChange={onChange} query={query} />
    </div>
  )
}

export default Filters