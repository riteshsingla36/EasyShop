import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../baseUrl';
import { useNavigate } from 'react-router-dom';
import styles from  "./register.module.css";

const Register = () => {
    const [profileImage, setProfileImage] = useState('');
    useEffect(() => {
        const auth = document.cookie?.split('; ')?.find((row) => row.startsWith('email'))?.split('=')[1];
        if(auth){
            navigate('/admin');
        }
    }, []);

    const navigate = useNavigate();

    const updateImages = (e) => {
        let fileReader;
        const file = e.target.files[0];
        if (file) {
            fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (e) => {
              const { result } = e.target;
              if (result) {
                setProfileImage(result)
              }
            }
        }
    }

    const register = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phoneNo = e.target.phoneNo.value;
        const gender = e.target.gender.value;
        const cpassword = e.target.cpassword.value;
        const password = e.target.password.value;
        if (email === "") {
            alert("please provide email");
            return;
        }

        if(password !== cpassword){
            alert("Confirm password is incorrect");
            return;
        }  

        axios.post(`${baseUrl}/auth/signup`, { name: name, email: email, phoneNo: phoneNo, gender: gender, profileImage: profileImage, password: password, confirmPassword: cpassword})
            .then(res => {
                if (res.data.status) {
                    alert("Register successfully");
                    e.target.name.value = "";
                    e.target.email.value = "";
                    e.target.gender.value = "";
                    e.target.phoneNo.value = "";
                    e.target.password.value = "";
                    e.target.profileImage = "";
                    navigate('/admin');
                }
                else {
                    alert(res.data.message);
                }
            }).catch(err => {
                alert(err.message);
            })
    }
    return (
        <>
            <div className={styles.login_box}>
                <h2>Register</h2>
                <form onSubmit={register}>
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
                        <input type="file" name="profileImage" id='profileImage' onChange={e => updateImages(e)} />
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