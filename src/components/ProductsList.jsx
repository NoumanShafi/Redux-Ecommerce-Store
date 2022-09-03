import React,{useCallback, useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { SET_Products , Lood } from "../redux/actions/index"
import Produactcomponent from './ProductComponent/Produactcomponent'
import Looding from './Looding/Looding'

import Category from './Category/Category'

const Url = "https://fakestoreapi.com/products"

const Url2 ='https://fakestoreapi.com/products/category/'


const ProductsList = () => {
  const Single_Category = useSelector((state) => state.Single_Category_Reducer)
  const status = useSelector((state) => state.Looding_Reducer)

  const dispatch = useDispatch()

  const fetchpeoducts =useCallback( async() =>{
  const response = await axios.get(Single_Category === "AllProducts" ? Url : `${Url2}${Single_Category}`).catch( (err) =>console.log("Error" , err))
  const data = response.data
    dispatch(SET_Products( Single_Category,data))
dispatch(Lood(false))
 
  },[Single_Category,dispatch])
  useEffect(() =>{
    fetchpeoducts()
  },[fetchpeoducts])
  if(status){
    return(
      <Looding/>
    )
  }
  return (
    <div>
      <Category/>
   <Produactcomponent/>
    </div>
    
  )
}

export default ProductsList