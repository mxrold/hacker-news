import '../assets/styles/components/ModalFavorites.css'

const ModalFavorites = (props) => {
  const { stateRemoveItem, setStateRemoveItem, handleRemoveItem } = props
  return (
    <div className='ModalFavorites'>
      <h2>Are you sure to remove this favorite?</h2>
      <button className='ModalFavorites__close' onClick={() => setStateRemoveItem(!stateRemoveItem)}>X</button>
      <div className='ModalFavorites__button'>
        <button
          className='ModalFavorites__button--close'
          onClick={() => setStateRemoveItem(!stateRemoveItem)}
        >
          Close
        </button>
        <button
          className='ModalFavorites__button--remove'
          onClick={() => handleRemoveItem(true)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ModalFavorites
