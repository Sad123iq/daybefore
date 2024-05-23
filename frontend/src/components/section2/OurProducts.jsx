import React, { useContext } from 'react'
import "./OurProducts.scss"
import Card from '../Card/Card'
import MainContext from '../../context/context'

const OurProducts = () => {
  const { data } = useContext(MainContext)
  return (
    <div className='ourProducts'>
      <h2>OUR PRODUCTS</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rerum?</p>
      <a href=""> View all products arrow </a>
      <div className="cards">
        <div className="row">

          <Card />

        </div>
      </div>
    </div>
  )
}

export default OurProducts