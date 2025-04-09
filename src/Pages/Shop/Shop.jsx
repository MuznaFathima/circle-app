import React from 'react'
import style from './Shop.module.css'
import Sidebar from './Sidebar'
import ProductsGrid from './ProductsGrid'

const Shop = () => {
  return (
    <div className={style.shop}>
        <Sidebar/>
        <ProductsGrid/>
    </div>
  )
}

export default Shop