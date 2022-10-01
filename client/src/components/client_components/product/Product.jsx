import React from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {baseUrl} from '../../../baseUrl'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';

const Product = ({product}) => {
    const navigate = useNavigate();
    const addToCart = () => {
      axios.post(`${baseUrl}/cartitem/create`, {product: product._id, user: "63178fe6d3dea88e73c89c52"}).then(res => {
        if(res.data.status) {
          alert("Successfully added to cart");
        }
        else {
          alert(res.data.message);
        }
      }).catch(err => {
        alert("Error: " + err.message);
      });
    }
  return (
    <div style={{position: "relative", cursor: "pointer", border: "1px solid silver", borderRadius: "5px", overflow: "hidden"}}>
      <img onClick={() => navigate(`/productdetail/${product._id}`)} src={product.images[0]} alt="not found" style={{width: "100%", height: "200px", margin: "auto", marginBottom: "10px"}} />
      {
        !product.inStock ?
            <span style={{position: "absolute", top: "20px", left: "0px", backgroundColor: "red", color: "white", transform: "rotate(-45deg)", fontSize: "10px", opacity: "0.7"}}>Out Of Stock</span>
            :
            <></>
      }
      <p onClick={() => navigate(`/productdetail/${product._id}`)} style={{color: "grey"}}>{product.name}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Product
