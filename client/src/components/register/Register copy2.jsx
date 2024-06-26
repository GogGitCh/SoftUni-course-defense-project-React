import './Register.css'
import { useNavigate } from 'react-router-dom';
import Path from '../../paths'
import { useState } from 'react';

const RegisterFormKeys = {
    ProfileImg: 'profileImg',
    FirstName: 'firstName',
    FamilyName: 'familyName',
    Email: 'email',
    PhoneNumber: 'phoneNumber',
    Role: 'role',
    Password: 'password',
    ConfirmPassword: 'confirmPass',
};

function Register() {
    const navigate = useNavigate();
    const [errorDisplay, setErrorDisplay] = useState('')


    const registerSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const result = Object.fromEntries(formData);

        try {
            const [userResponse, customerResponse] = await Promise.all([
                fetch('http://localhost:3030/users/register', {
                    method: "POST",
                    body: JSON.stringify({
                        [RegisterFormKeys.ProfileImg]: result.profileImg,
                        [RegisterFormKeys.FirstName]: result.firstName,
                        [RegisterFormKeys.FamilyName]: result.familyName,
                        [RegisterFormKeys.Email]: result.email,
                        [RegisterFormKeys.PhoneNumber]: result.phoneNumber,
                        [RegisterFormKeys.Role]: result.role,
                        [RegisterFormKeys.Password]: result.password,
                        [RegisterFormKeys.ConfirmPassword]: result.confirmPass
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }),
                fetch('http://localhost:3030/bri', {
                    method: "POST",
                    body: JSON.stringify({
                        [RegisterFormKeys.ProfileImg]: result.profileImg,
                        [RegisterFormKeys.FirstName]: result.firstName,
                        [RegisterFormKeys.FamilyName]: result.familyName,
                        [RegisterFormKeys.Email]: result.email,
                        [RegisterFormKeys.PhoneNumber]: result.phoneNumber,
                        [RegisterFormKeys.Role]: result.role,
                        [RegisterFormKeys.Password]: result.password,
                        [RegisterFormKeys.ConfirmPassword]: result.confirmPass
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
            ]);

            const [userData, customerData] = await Promise.all([userResponse.json(), customerResponse.json()]);

            // Process user data
            if (userData.code === 409) {
                throw new Error(userData.message);
            }
            console.log(userData);

            // Process customer data
            if (customerData.code === 409) {
                throw new Error(customerData.message);
            }
            console.log(customerData);

            const userToken = userData.accessToken;
            localStorage.setItem("accessToken", userToken);
            localStorage.setItem("accessToken", userToken);

            navigate(Path.Home);
        } catch (err) {
            setErrorDisplay(`${err.message}`);
        }
    };


    return (
        <form onSubmit={registerSubmitHandler}>
            <label htmlFor={RegisterFormKeys.ProfileImg}>Profile Picture</label>
            <input
                type="text"
                id={RegisterFormKeys.ProfileImg}
                name={RegisterFormKeys.ProfileImg}
                placeholder="URL or upload"
            />

            <label htmlFor={RegisterFormKeys.FirstName}>First Name</label>
            <input type="text" id={RegisterFormKeys.FirstName} name={RegisterFormKeys.FirstName} />

            <label htmlFor={RegisterFormKeys.FamilyName}>Family Name</label>
            <input type="text" id={RegisterFormKeys.FamilyName} name={RegisterFormKeys.FamilyName} />

            <label htmlFor={RegisterFormKeys.Email}>Email Address</label>
            <input type={RegisterFormKeys.Email} id={RegisterFormKeys.Email} name={RegisterFormKeys.Email} />

            <label htmlFor={RegisterFormKeys.PhoneNumber}>Phone Number</label>
            <input type="tel" id={RegisterFormKeys.PhoneNumber} name={RegisterFormKeys.PhoneNumber} />

            <label htmlFor={RegisterFormKeys.Role}>Choose Role</label>
            <select id={RegisterFormKeys.Role} name={RegisterFormKeys.Role}>
                <option value="client">Client</option>
                <option value="master">Master</option>
                <option value="apprentice">Apprentice</option>
                <option value="preparer">Preparer</option>
            </select>
            <>
                <div>
                    <label htmlFor={RegisterFormKeys.Password}>Password:</label>
                    <input type={RegisterFormKeys.Password} id={RegisterFormKeys.Password} name={RegisterFormKeys.Password} />
                </div>
                <div>
                    <label htmlFor={RegisterFormKeys.ConfirmPassword}>Confirm Password:</label>
                    <input
                        type={RegisterFormKeys.Password}
                        id={RegisterFormKeys.ConfirmPassword}
                        name={RegisterFormKeys.ConfirmPassword}
                    />
                </div>
            </>
            {errorDisplay !== '' && <h1>{errorDisplay}</h1>}
            <button type="submit" value='Register'>Register</button>
        </form>


    );
}

export default Register;
