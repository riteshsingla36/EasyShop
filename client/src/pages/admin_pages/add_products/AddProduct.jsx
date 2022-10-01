import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../baseUrl'

const AddProduct = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [productImages, setProductImages] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/category`).then(res => {
            if (res.data.status) {
                setCategories(res.data.data);
            }
            else {
                alert(res.data.message);
            }
        }).catch(err => {
            alert(err.message);
        });
    }, [])

    const getSubCategories = (e) => {
        const categoryId = e.target.value;
        axios.get(`${baseUrl}/subcategory/${categoryId}`).then(res => {
            if (res.data.status) {
                console.log(res.data.data);
                setSubCategories(res.data.data);
            }
            else {
                alert(res.data.message);
            }
        }).catch(err => {
            alert(err.message);
        });
    }
    const updateImages = (e) => {
        const images = e.target.files;
        for (let image of images) {
            if (image.size > 1000000) {
                e.target.value = "";
                alert("image size can not be greater than 1000000");
                return;
            }
        }
        setProductImages(images);
    }

    const addProductHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const stock = e.target.stock.value;
        const category = e.target.category.value;
        const subcategory = e.target.subcategory.value;
        const description = e.target.description.value;
        const image = productImages;
        console.log(image, "rit");
        const formData = new FormData();
        
        formData.append("name", name);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("category", category);
        formData.append("subCategory", subcategory);
        formData.append("description", description);
        formData.append("image", image);
        axios.post(`${baseUrl}/product/create`, formData)
        .then(res => {
            if(res.data.status) {
                alert("product created successfully");
            }
            else {
                alert(res.data.message);
            }
        }).catch(err => {
            alert(err.message);
        })
    }
    return (
        <div>
            <b>Add Product</b>
            <form onSubmit={addProductHandler}>
                <table border="0" align="center">
                    <tbody>

                        <tr>
                            <td><label htmlFor="name">Name: </label></td>
                            <td><input id="name" maxLength="50" name="name" type="text" required /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="price">Price: </label></td>
                            <td><input id="price" name="price" type="number" required /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="stock">Stock: </label></td>
                            <td><input id="stock" name="stock" type="number" required /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="category">Category: </label></td>
                            <td>
                                <select name="category" id="category" onChange={e => getSubCategories(e)}>
                                    <option value=""></option>
                                    {categories.map(category => {
                                        return <option key={category._id} value={category._id}>{category.name}</option>;
                                    })}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td><label htmlFor="subcategory">Subcategory: </label></td>
                            <td>
                                <select name="subcategory" id="subcategory">
                                    {subCategories.map(subcategory => {
                                        return <option key={subcategory._id} value={subcategory.name}>{subcategory.name}</option>;
                                    })}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td><label htmlFor="description">Description</label></td>
                            <td><textarea name="description" id="description" cols="30" rows="10" /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="images">Images: </label></td>
                            <td><input id="images" name="images" type="file" multiple="multiple" onChange={e => updateImages(e)} required /></td>
                        </tr>

                        <tr>
                            <td align="right"><input name="Submit" type="Submit" /></td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default AddProduct
