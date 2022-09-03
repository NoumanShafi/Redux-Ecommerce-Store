import React, { useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { SET_Single_Product, Remove_Product, Lood } from "../../redux/actions/index"
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import style from "./productsDetails.module.css"
import { useCallback } from 'react'
import Looding from '../Looding/Looding'
const url = 'https://fakestoreapi.com/products/'
const ProductsDetails = () => {
  const details = useSelector((state) => state.Products_Details_Reducer)
  const dispatch = useDispatch()
  const { productid } = useParams()
  const status = useSelector((state) => state.Looding_Reducer)

  const fetchSingleItem = useCallback(async () => {
    dispatch(Lood(true))
    const response = await axios.get(`${url}${productid}`).catch((err) => {
      console.log("Erroe", err)
    })
    const data = response.data
    dispatch(SET_Single_Product(data))
    dispatch(Lood(false))

  }, [dispatch, productid])

  useEffect(() => {
    fetchSingleItem()
    return () => {
      dispatch(Remove_Product())
    }
  }, [fetchSingleItem, dispatch])
  if (status) {
    return (<Looding />)
  }
  const { price, title, image, description, category } = details
  return (
    <main>

      <div className={style.container}>
        <div className={style.image_container}>
          <img src={image} alt="NoAlter" />
        </div>
        <div className={style.details}>
          <h2>{title}</h2>
          <p>{description}</p>
          <h2>category: {category}</h2>
          <h2>price: ${price}</h2>
          <Link to="/products" className={style.link}>continue Shopping</Link>
        </div>



      </div>
    </main>
  )
}

export default ProductsDetails