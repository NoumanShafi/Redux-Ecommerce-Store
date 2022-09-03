import React, { useEffect } from 'react'
import axios from 'axios'
import { SET_Category ,Category_Type} from "../../redux/actions/index"
import { useSelector, useDispatch } from 'react-redux/es/exports'
import style from "./Category.module.css"

const Category = () => {
    const AllCategory = useSelector((state) => state.Category_Reducer.category)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const fetchCategory = async () => {
            const response = await axios.get("https://fakestoreapi.com/products/categories").catch((err) => console.log("Error", err))
            const data = response.data
    
            dispatch(SET_Category(["All", ...data]))
        }
        fetchCategory()
    }, [dispatch])

    return (


        <div className={style.container}>
            <h3>Category:</h3>
            {
                AllCategory.map((items) => {
                    return (
                        <div>
                            <button onClick={() => dispatch(Category_Type(items+1))} className={style.button}>{items}</button>
                        </div>
                    )
                })
            }


        </div>

    )
}

export default Category