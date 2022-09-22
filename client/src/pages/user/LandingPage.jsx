import { Container } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseUrl } from '../../baseUrl'
import Products from '../../components/client_components/products/Products'
import "./landingPage.css"

const LandingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/product`).then(result => {
      setProducts(result.data.data);
    }).catch(err => {
      alert(err.messsage)
      console.log(err.messsage)
    })
  },[]);

  return (
    <Container>
      <Products products={products} />
    </Container>
  )
}

export default LandingPage