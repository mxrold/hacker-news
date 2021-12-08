import SearchIcon from '../assets/static/search.svg'
import '../assets/styles/components/Search.css'

const Search = ({ onChange, query }) => {
  return (
    <div className="Search">
      <input 
        className="Search__input" 
        type="text" 
        placeholder="Search news by title" 
        value={query}
        onChange={onChange} 
      />
      <img className="Search__icon" src={SearchIcon} alt="Search icon" />
    </div>
  )
}

export default Search