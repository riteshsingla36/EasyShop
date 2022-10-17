import axios from 'axios';
import React, { useState } from 'react';
import { baseUrl } from '../../baseUrl';
import { useNavigate } from 'react-router-dom';
import styles from  "./register.module.css";

const Register = () => {
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    const updateImage = (e) => {
        if (e.target.files[0].size > 1000000) {
            e.target.value = "";
            alert("please selece image less then 1000000");
        }
        else {
            setImage(e.target.files[0]);
        }
    }
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
            if (!res.data.status) {
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
        <>
            <div className={styles.login_box}>
                <h2>Register</h2>
                <form onSubmit={registerHandler}>
                    <div className={styles.user_box}>
                        <input type="text" name="name" id='name' required="" />
                        <label>Name</label>
                    </div>
                    <div className={styles.user_box}>
                        <input type="email" name="email" id='email' required="" />
                        <label>Email</label>
                    </div>
                    <div className={styles.user_box}>
                        <input type="tel" name="phoneNo" id='phoneNo' required="" />
                        <label>Phone No.</label>
                    </div>
                    <div className={styles.user_box}>
                        <select name="gender" id="gender" required="">
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                            <option value="OTHER">OTHER</option>
                        </select>
                        <label>Gender</label>
                    </div>
                    <div className={styles.user_box}>
                        <input type="file" name="" id='' onChange={e => updateImage(e)} />
                        <label>Profile Image</label>
                    </div>
                    <div className={styles.user_box}>
                        <input type="password" name="password" id='password' required="" />
                        <label>Password</label>
                    </div>
                    <div className={styles.user_box}>
                        <input type="password" name="cpassword" id='cpassword' required="" />
                        <label>Confirm Password</label>
                    </div>
                    <button type='submit' >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Register