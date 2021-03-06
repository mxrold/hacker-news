import NewsData from './NewsData'
import FavoriteButton from './FavoriteButton'
import '../assets/styles/components/News.css'

const News = ({ data }) => {
  return (
    <section className='News container-width'>
      {
        data.map((item, index) => (
          <article className='News__item' key={`${item.story_id}-${index}`}>
            <NewsData {...item} />
            <FavoriteButton id={item.story_id} item={item} />
          </article>
        ))
      }
    </section>
  )
}

export default News
