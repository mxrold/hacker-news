import { useState } from 'react'
import Arrow from '../assets/static/arrow.svg'
import Angular from '../assets/static/angular-icon.png'
import React from '../assets/static/react-icon.png'
import Vue from '../assets/static/vue-icon.png'
import '../assets/styles/components/Select.css'

const Select = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false)

  const categories = [
    {
      title: 'Angular',
      src: Angular,
      category: 'angular'
    },
    {
      title: 'React',
      src: React,
      category: 'reactjs'
    },
    {
      title: 'Vue',
      src: Vue,
      category: 'vuejs'
    }
  ]

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
            {
              categories.map(item => (
                <li className="Select__button--dropdown--list-item" key={item.title}>
                  <button onClick={() => onClick(item.category)}><img src={item.src} alt={`${item.title} icon`} />{item.title}</button>
                </li>
              ))
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default Select