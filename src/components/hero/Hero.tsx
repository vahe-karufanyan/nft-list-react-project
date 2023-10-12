import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './hero.module.scss'
import { request } from '../../utils/fetchApi'

const Hero = () => {
  const [category, setCategory] = useState("Clever+Robots")
  const [quantity, setQuantity] = useState(0)
  const navigate = useNavigate()


  const handleSearch = () => {
    navigate(`/nfts?category=${category}`)
  }

  useEffect(() => {
    const fetchPropertiesNumber = async() => {
      try {
         const data = await request('/nfts', 'GET')
         setQuantity(data.length)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPropertiesNumber()
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.background} ></div>
      <div className={classes.wrapper}>
        <h1>Platform with a large selection of NFTs</h1>
        <h5>Search the best selection of NFTs available now</h5>
        <h4>More than {quantity} NFTs listed in our website</h4>
        <div className={classes.options}>
          <div className={classes.searchTitle}>Categories: </div>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option disabled>Select category</option>
            <option value="Clever+Robots">Clever Robots</option>
            <option value="Explorers">Explorers</option>
            <option value="Artist+Cyborgs">Artist Cyborgs</option>
          </select>
          <div className={classes.searchIcon} onClick={handleSearch}>SEARCH</div>
        </div>
      </div>
    </div>
  )
}

export default Hero