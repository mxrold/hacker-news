import Filters from '../components/Filters'
import News from '../components/News'
import { data } from '../initialState'

const Home = () => {
  return (
    <main className="Main container-padding">
      <Filters />
      <News data={data} />
    </main>
  )
}

export default Home

