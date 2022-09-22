import axios from 'axios';
import React from 'react'
import { baseUrl } from '../../baseUrl';
import "./register.css"

const Register = () => {

    const registerHandler = (e) => {

        e.preventDefault();
        const formData = new FormData();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phoneNo = e.target.phoneNo.value;
        //const profileImage = e.target.image.files[0];
        const profileImage = e.target.profileImage.files[0];
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
        console.log(e.target.profileImage.files[0]);
        console.log("DEEPANSHU SHARMA");
        //axios.post(`${baseUrl}/auth/signup`, formData);
        
    };

    return (
        <div>
            <h2 ALIGN="CENTER">Registration form</h2>

            <form onSubmit={registerHandler}>
                <table border="0" align="center">
                    <tbody>

                        <tr>
                            <td><label for="name">Name: </label></td>
                            <td><input id="name" maxlength="50" name="name" type="text" required/></td>
                        </tr>

                        <tr>
                            <td><label for="email">Email: </label></td>
                            <td><input id="email" name="email" type="email" required/></td>
                        </tr>

                        <tr>
                            <td><label for="phoneNo">Phone No.: </label></td>
                            <td><input id="branch" maxlength="50" name="phoneNo" type="tel" required/></td>
                        </tr>

                        <tr>
                            <td><label for="gender">Gender: </label></td>
                            <td><input id="rollno" maxlength="50" name="gender" type="text" required/></td>
                        </tr>

                        <tr>
                            <td><label for="profileImage">Profile Image</label></td>
                            <td><input type="file" name="profileImage" id='profileImage' accept=".png, .jpg, .jpeg"/></td>
                        </tr>

                        <tr>
                            <td><label for="password">Password: </label></td>
                            <td><input id="password" maxlength="50" name="password" type="password" required/></td>
                        </tr>

                        <tr>
                            <td><label for="cpassword">Confirm Password:</label></td>
                            <td><input maxlength="50" name="cpassword" type="text" required/></td>
                        </tr>

                        <tr>
                            <td align="right"><input name="Submit" type="Submit" value="SUBMIT" /></td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Register