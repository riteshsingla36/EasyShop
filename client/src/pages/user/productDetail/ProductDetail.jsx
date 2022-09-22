import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../../baseUrl';
import "./productDetail.css"

const ProductDetail = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    axios.get(`${baseUrl}/product/${productId}`).then(result => {
      setProduct(result.data.data);
    }).catch(err => {
      alert(err.message);
      console.log(err.message);
    })
  },[productId]);

  useEffect(() => {
    if(product && product.images) {
      setMainImage(product?.images[0]);
    }
  },[product])
  return (
    <div>
      <img src={mainImage} alt="not found" style={{width: "400px", height: "400px"}} />
      <br />
      <br />
      <span>
        {(product?.images)?.map((image) => {
          return (<img src={image} alt="not found" style={{width: "100px", height: "100px"}} key={image} onClick={() => setMainImage(image)} />);
        })}
      </span>
      <p>{product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  )
}

export default ProductDetail
