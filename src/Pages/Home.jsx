import React from 'react'

import Image from "../girl.png"
import style from "./Home.module.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
 

    <div className={style.container}>
      <div className={style.header}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eius vero modi est explicabo consequuntur minima ad omnis? Nostrum consequatur facilis possimus itaque dicta debitis, quas veniam reiciendis corrupti amet, rerum odio quibusdam recusandae necessitatibus, sint quam iste beatae eum quos perspiciatis in tempore incidunt autem. Sint placeat temporibus labore?</p>
        <Link to="/products" className={style.link}>Shop Now</Link>
      </div>

        <img src={Image} alt="nothuing" />

  

       
    </div>
  
  )
}

export default Home