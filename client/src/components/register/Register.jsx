import { useState } from 'react';
import './Register.css'


const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirmPassword',
};

function Register() {

    
    return (
        <form>
            <label htmlFor="profileImg">Profile Picture</label>
            <input
                type="text"
                id="profileImg"
                name="profileImg"
                placeholder="URL or upload"
            />
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required="" />

            <label htmlFor="familyName">Family Name</label>
            <input type="text" id="familyName" name="familyName" required="" />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required="" />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" />

            <label htmlFor="role">Choose Role</label>
            <select id="role" name="role">
                <option value="client">Client</option>
                <option value="master">Master</option>
                <option value="apprentice">Apprentice</option>
                <option value="preparer">Preparer</option>
            </select>
            <>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required="" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required=""
                    />
                </div>
            </>

            <button type="submit">Register</button>
        </form>


    );
}

export default Register
