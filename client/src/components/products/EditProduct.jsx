import axios from 'axios';
import React from 'react';
import { baseUrl } from '../../baseUrl';
import ToastAlert from '../Template/ToastAlert';
import './editProduct.css'

export default function EditProdut(props) {

    const [showToast, setToast] = React.useState({ status: false, message: '', severity: '' });

    const toast = (data) => {
        setToast(data)
    }

    const [editData, setEditData] = React.useState({
        name: props.toEditProduct.name,
        price: props.toEditProduct.price,
        stock: props.toEditProduct.stock,
        category: props.toEditProduct.category,
        subCategory: props.toEditProduct.subCategory,
        description: props.toEditProduct.description
    })

    const onChangeHandler = (event) => {
        let { name, value } = event.target;

        setEditData({
            ...editData,
            [name]: value
        });
    }

    const editSubmit = () => {
        axios.patch(`${baseUrl}/product/update/${props.toEditProduct._id}`, editData).then((response) => {
            setToast({ status: true, message: `Product updated successfully`, severity: 'success' })
        }).catch((err) => {
            setToast({ status: true, message: `Could not process the request`, severity: 'error' })
        })
    }

    return (
        <>
            {
                showToast.status ?
                    < ToastAlert from_toast={toast} severity={showToast.severity} message={showToast.message} /> :
                    ''
            }
            <div style={{ border: '1px solid #625a5a' }}>
                <div>
                    <div className="section">
                        <label htmlFor="">Name:</label>
                        <input type="text" name="name" placeholder="Please enter product name" id="" value={editData.name} onChange={onChangeHandler} />
                    </div>
                    <div className="section">
                        <label htmlFor="">Price:</label>
                        <input type="number" name="price" placeholder="Please enter product Price" id="" value={editData.price} onChange={onChangeHandler} />
                    </div>
                    <div className="section">
                        <label htmlFor="">Stock:</label>
                        <input type="number" name="stock" placeholder="Please enter product in stock Qty" id="" value={editData.stock} onChange={onChangeHandler} />
                    </div>
                    <div className="section">
                        <label htmlFor="">Category:</label>
                        <input type="text" name="category" placeholder="Please enter product category" id="" value={editData.category} onChange={onChangeHandler} />
                    </div>
                    <div className="section">
                        <label htmlFor="">Sub category:</label>
                        <input type="text" name="subCategory" placeholder="Please enter product sub-category" id="" value={editData.subCategory} onChange={onChangeHandler} />
                    </div>
                    <div className="section">
                        <label htmlFor="">Description:</label>
                        <textarea type="text" name="description" placeholder="Please enter product description" id="" value={editData.description} onChange={onChangeHandler} />
                    </div>
                </div>
                <div className="section">
                    <button className="button-17" onClick={() => editSubmit()}>Edit</button>
                </div>
            </div>
        </>
    )
}
