import './Login.css'

function Login() {
    return (
        <form>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required="" />

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" />
            </div>
            
            <button type="submit">Log in</button>
        </form>


    );
}

export default Login
