import { useViewportWidth } from '../hooks/useViewportWidth'
import Arrow from '../assets/static/arrow-light.svg'
import '../assets/styles/components/ButtonHome.css'

const ButtonHome = ({ path, countPages }) => {
  const minWidth = 1020
  const [isMobile] = useViewportWidth(minWidth)

  return (
    <>
      {
        isMobile && countPages > 1 &&
          <div className='ButtonHome'>
            <a href={`#${path}`} className='ButtonHome__button'>
              <img src={Arrow} alt='Go back up' />
            </a>
          </div>
      }
    </>
  )
}

export default ButtonHome
