import News from '../components/News'
import { data } from '../initialState'

const Favorites = () => {
  return (
    <main className="Main container-padding">
      <News data={data} />
    </main>
  )
}

export default Favorites
