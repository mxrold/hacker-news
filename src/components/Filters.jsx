import Select from './Select'
import Search from './Search'
import '../assets/styles/components/Filters.css'

const Filters = () => {

  return (
    <div className="Filters container-width">
      <Select />
      <Search />
    </div>
  )
}

export default Filters