import React from 'react'
import {Link} from "react-router-dom"
import style from "./Navebar.module.css"
const Navebar = () => {
  return (
    <nav>
      <div className={style.container}>
       
          <Link to="/" className={style.heading_link}>Online Store</Link>
  <div className={style.links_contsiner}>
    <ul>
      <li>
        <Link to="/" className={style.links}>Home</Link>
      </li>
      <li>
        <Link to="/products" className={style.links}>Products</Link>
      </li>
      <li>
        <Link to="/about" className={style.links}>About</Link>
      </li>
    </ul>
  </div>

      </div>
    </nav>
  )
}

export default Navebar