import { Container } from '@mui/material'
import React from 'react'
import "./products.css"
import Product from '../product/Product';

const Products = ({products}) => {
  return (
    <Container style={{display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px"}}>
        {products.map((product) => {
            return <Product product={product} key={product._id} />
        })}
    </Container>
  )
}

export default Products
