import SearchIcon from '../assets/static/search.svg'
import '../assets/styles/components/Search.css'

const Search = () => {
  return (
    <div className="Search">
      <input className="Search__input" type="text" placeholder="Search news by title" />
      <img className="Search__icon" src={SearchIcon} alt="Search icon" />
    </div>
  )
}

export default Search