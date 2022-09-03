import React from 'react'
import style from "./Productcomponent.module.css"
import { FaSearch } from "react-icons/fa"
import { useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'

const Produactcomponent = () => {
  const Products = useSelector((state) => state.ProductsReducer.products)
  return (

    <div className={style.container}>
      {
        Products.map((items) => {
          const { id, title, image, price ,category } = items
          return (
            <div className={style.card}>
              <div className={style.overlay}>
              <Link to={`/item/${id}`}> <FaSearch className={style.icon}/></Link>
              </div>
              <div className={style.image_container}>

               <img src={image} alt="Shop" className={style.image} />
              </div>
              <div className={style.details}>
                <h3>{title}</h3>
                <h3>${price}</h3>
                <p>{category}</p>
              </div>
            </div>
          )
        })
      }

    </div>

  )
}

export default Produactcomponent