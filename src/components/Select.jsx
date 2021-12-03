import { useState } from 'react'
import Arrow from '../assets/static/arrow.svg'
import Angular from '../assets/static/angular-icon.png'
import React from '../assets/static/react-icon.png'
import Vue from '../assets/static/vue-icon.png'
import '../assets/styles/components/Select.css'

const Select = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="Select">
      <button 
        className="Select__button"
        onClick={() => setIsActive(!isActive)}
      >
        Select your news <img className={isActive ? 'toggle-up' : 'toggle-down'} src={Arrow} alt="Arrow icon" />
      </button>
      {
        isActive &&
        <div className={`Select__button--dropdown ${isActive && 'slide-top'}`}>
          <ul className="Select__button--dropdown--list">
            <li className="Select__button--dropdown--list-item">
              <button><img src={Angular} alt="Angular icon" /> Angular</button>
            </li>
            <li className="Select__button--dropdown--list-item">
              <button><img src={React} alt="React icon" /> React</button>
            </li>
            <li className="Select__button--dropdown--list-item">
              <button><img src={Vue} alt="Vue icon" /> Vue</button>
            </li>
          </ul>
        </div>
      }
    </div>
  )
}

export default Select