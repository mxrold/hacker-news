import { resetDate } from '../utils/resetDate'
import Clock from '../assets/static/clock.svg'
import '../assets/styles/components/NewsData.css'

const NewsData = ({ created_at, author, story_title, story_url }) => {
  return (
    <div className='NewsData'>
      <div className='NewsData__user'>
        <img className='NewsData__user--clock' src={Clock} alt='Clock icon' />
        <time dateTime={created_at}>
          {resetDate(created_at)}
        </time>
        <p>by {author}</p>
      </div>
      <div className='NewsData__title'>
        <h3>{story_title}</h3>
      </div>
      <a className='NewsData__url' href={story_url} target='_blank' title={story_title} rel='noreferrer' />
    </div>
  )
}

export default NewsData
