import React from 'react'
import {useNavigate} from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/productdetail/${product._id}`)} style={{position: "relative", cursor: "pointer", border: "1px solid silver", borderRadius: "10px", overflow: "hidden"}}>
      <img src={product.images[0]} alt="not found" style={{width: "50%", height: "100px", margin: "auto"}} />
      {
        !product.inStock ? 
            <span style={{position: "absolute", top: "20px", left: "0px", backgroundColor: "red", color: "white", transform: "rotate(-45deg)", fontSize: "10px", opacity: "0.7"}}>Out Of Stock</span>
            :
            <span></span>
      }
      <p>{product.name}</p>
    </div>
  )
}

export default Product
