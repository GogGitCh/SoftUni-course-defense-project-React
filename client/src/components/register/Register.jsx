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


    const registerSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const result = Object.fromEntries(formData);

        fetch('http://localhost:3030/users/register', {
            method: "POST",
            body: JSON.stringify({
                "email": result.email,
                "password": result.password
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((resolved) => {
                if (resolved.code == 409) {
                    throw new Error(resolved.message)
                }
                console.log(resolved)
                const token = resolved.accessToken
                localStorage.setItem("token", token);
                navigate(Path.Home);
            })
            .catch((err) => {
                setErrorDisplay(`${err.message}`);   
            });

    }
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
