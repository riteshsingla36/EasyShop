import React from 'react'
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import BlockIcon from '@mui/icons-material/Block';
import { useState } from "react";
import axios from 'axios';
import ToastAlert from '../../../components/Template/ToastAlert';
import { baseUrl } from '../../../baseUrl';


export default function UserList() {
    const [userData, setUserData] = useState([]);
    const [showToast, setToast] = useState({ status: false, message: '', severity: '' });

    const handleBlock = (id, isActive) => {
        axios.patch(`${baseUrl}/user/update/${id}`, { isActive: !isActive }).then((response) => {
            if (response.status === 200) {
                response.data.data.isActive ?
                    setToast({ status: true, message: `User unblocked successfully`, severity: 'success' }) :
                    setToast({ status: true, message: `User blocked successfully`, severity: 'success' })
            }
        }).catch(error => {
            setToast({ status: true, message: `Could not complete your request`, severity: 'error' });
        });
    };

    React.useEffect(() => {
        axios.get(`${baseUrl}/user/all`).then((response) => {
            setUserData(response.data.data)
        })
    }, [showToast]);

    const columns = [
        { field: "_id", headerName: "ID", width: 210 }, {
            field: 'profileImage',
            headerName: 'Profile Picture',
            width: 200,
            renderCell: (params) => {
                return <img className="userListImg" src={params.row.profileImage} />
            }
        },
        {
            field: "name",
            headerName: "User Name",
            width: 220,
        },
        { field: "email", headerName: "Email", width: 250 },
        {
            field: "isAdmin",
            headerName: "Admin",
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <div className="userListUser">
                            <p>{params.row.isAdmin ? 'Yes' : 'No'}</p>
                        </div>
                    </>
                )
            }
        },
        {
            field: "phoneNo",
            headerName: "Phone Number",
            width: 160,
        },
        {
            field: "gender",
            headerName: "Gender",
            width: 160,
        },
        {
            field: "action",
            headerName: "Block",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <p onClick={() => handleBlock(params.row._id, params.row.isActive)}>
                            {params.row.isActive ?
                                <BlockIcon className="userListDelete" />
                                :
                                <button className="userListEdit">Unblock</button>}
                        </p>
                    </>
                );
            },
        },
    ];

    const toast = (data) => {
        setToast(data)
    }

    return (
        <div style={{ height: "90vh", width: '100%' }}>
            {showToast.status ? < ToastAlert from_toast={toast} severity={showToast.severity} message={showToast.message} /> : ''}
            <DataGrid
                rows={userData}
                columns={columns}
                pageSize={15}
                rowsPerPageOptions={[15]}
                getRowId={(row) => row._id}
            />

        </div>
    );
}
