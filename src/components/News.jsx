import NewsData from './NewsData'
import FavoriteButton from './FavoriteButton'
import '../assets/styles/components/News.css'

const News = ({ data }) => {
  return (
    <section className="News container-width">
      {
        data.map(item => (
          <article className="News__item" key={item.story_id}>
            <NewsData {...item} />
            <FavoriteButton />
          </article>
        ))
      }
    </section>
  )
}

export default News
