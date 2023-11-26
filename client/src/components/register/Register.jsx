import './Register.css'

function Register() {
    return (
        <form>
            <label htmlFor="profile-picture">Profile Picture</label>
            <input
                type="text"
                id="profile-picture"
                name="profile-picture"
                placeholder="URL or upload"
            />
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required="" />

            <label htmlFor="family-name">Family Name</label>
            <input type="text" id="family-name" name="family-name" required="" />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required="" />

            <label htmlFor="phone-number">Phone Number</label>
            <input type="tel" id="phone-number" name="phone-number" />
            
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
