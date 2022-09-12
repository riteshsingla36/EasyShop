import React from 'react'
import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { useState } from "react";
import axios from 'axios';
import ToastAlert from '../../components/Template/ToastAlert';
import { baseUrl } from '../../baseUrl';
import ModalComp from '../../components/Template/Modal/ModalComp';
import EditProduct from '../../components/products/EditProduct';


export default function ProductList() {
    const [productData, setProductData] = useState([]);
    const [toEditProduct, setToEditProduct] = useState({});
    const [open, setOpen] = React.useState(false);

    const handleOpen = (id) => {
        setOpen(true);
        setToEditProduct(productData.find((product) => product._id === id));
    };
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        axios.get(`${baseUrl}/product/`).then((response) => {
            setProductData(response.data.data)
        })
    }, [open]);

    const columns = [
        { field: "_id", headerName: "ID", width: 210 },
        {
            field: 'profileImage',
            headerName: 'Product Image',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        {
                            params.row.images.map((row) => (
                                <img key={row} className="userListImg" src={row} />
                            ))
                        }
                    </>
                )
            }
        },
        {
            field: "name",
            headerName: "Product Name",
            width: 220,
        },
        { field: "price", headerName: "Price", width: 150 },
        { field: "stock", headerName: "Qty (in stock)", width: 150 },
        { field: "category", headerName: "Category", width: 200 },
        { field: "subCategory", headerName: "Sub-Category", width: 200 },
        { field: "description", headerName: "Product Decsription", width: 250 },
        {
            field: "action",
            headerName: "Edit Product",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <p style={{ cursor: 'pointer', margin: 'auto' }} onClick={() => handleOpen(params.row._id)}>
                            <ModeEditOutlineIcon />
                        </p>
                    </>
                );
            },
        },
    ];

    return (
        <div style={{ height: "90vh", width: '100%' }}>
            <DataGrid
                rows={productData}
                columns={columns}
                pageSize={15}
                rowsPerPageOptions={[15]}
                getRowId={(row) => row._id}
            />
            <ModalComp
                openModal={open}
                handleModalClose={handleClose}
                component={
                    <EditProduct
                        toEditProduct={toEditProduct}
                    />
                } />
        </div>
    );
}
