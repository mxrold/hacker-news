import { useState, useEffect } from 'react'

const LoadingError = ({ error }) => {
  return (
    <>
      {
      error &&
        <h2 style={{ marginBottom: '30px' }}>We could not load the information 🤔</h2>
      }
    </>
  )
}

export default LoadingError
