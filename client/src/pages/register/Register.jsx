import axios from 'axios';
import React, { useState } from 'react';
import { baseUrl } from '../../baseUrl';
import {useNavigate} from 'react-router-dom';
import "./register.css";

const Register = () => {
    const [image , setImage] = useState("");
    const navigate = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phoneNo = e.target.phoneNo.value;
        const profileImage = image;
        const gender = e.target.gender.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.cpassword.value;

        formData.append('name', name);
        formData.append('email', email);
        formData.append('phoneNo', phoneNo);
        formData.append('profileImage', profileImage);
        formData.append('gender', gender);
        formData.append('password', password);
        formData.append('confirmPassword', confirmPassword);
        axios.post(`${baseUrl}/auth/signup`, formData).then(res => {
            if(!res.data.status) {
                alert(res.data.message);
            }
            else {
                alert("successfully registered")
                navigate("/login")
            }
        }).catch(err => {
            alert("error: " + err.message);
        });
        
    };

    return (
        <div>
            <h2>Registration form</h2>

            <form onSubmit={registerHandler}>
                <table border="0" align="center">
                    <tbody>

                        <tr>
                            <td><label htmlFor="name">Name: </label></td>
                            <td><input id="name" maxLength="50" name="name" type="text" required/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="email">Email: </label></td>
                            <td><input id="email" name="email" type="email" required/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="phoneNo">Phone No.: </label></td>
                            <td><input id="branch" maxLength="50" name="phoneNo" type="tel" required/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="gender">Gender: </label></td>
                            <td><input id="rollno" maxLength="50" name="gender" type="text" required/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="profileImage">Profile Image</label></td>
                            <td><input type="file" name="profileImage" id='profileImage' accept=".png, .jpg, .jpeg" onChange={(e) => setImage(e.target.files[0])}/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="password">Password: </label></td>
                            <td><input id="password" maxLength="50" name="password" type="password" required/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="cpassword">Confirm Password:</label></td>
                            <td><input maxLength="50" name="cpassword" type="text" required/></td>
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

export default Register