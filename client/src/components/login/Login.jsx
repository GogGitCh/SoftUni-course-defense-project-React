import Path from '../../paths';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

function Login() {
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const result = Object.fromEntries(formData);
        console.log(result.email)
        console.log(result.password)
        console.log(JSON.stringify(result))

        fetch('http://localhost:3030/users/login', {
            method: 'POST',
            body:JSON.stringify(result),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((res,err) => {
                if (res.status == 200) {
                    return res.json();
                }
                console.log(res);
                throw new Error(err)
            })
            .then((resolved) => {
                    console.log(resolved);

                    const token = resolved.accessToken;
                    localStorage.setItem("accessToken",token);
                    const role = resolved.role;
                    localStorage.setItem("role",role);

                    navigate(Path.Home);          
            })
            .catch((err) => {console.log(err)})

    }

    return (
        <form onSubmit={loginHandler}>
            <label htmlFor={LoginFormKeys.Email}>Email Address</label>
            <input type={LoginFormKeys.Email} id={LoginFormKeys.Email} name={LoginFormKeys.Email} required="" />

            <div>
                <label htmlFor={LoginFormKeys.Password}>Password:</label>
                <input type={LoginFormKeys.Password} id={LoginFormKeys.Password} name={LoginFormKeys.Password} required="" />
            </div>

            <button type="submit">Log in</button>
        </form>


    );
}

export default Login
