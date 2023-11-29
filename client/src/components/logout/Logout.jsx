import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Path from "../../paths";

function Logout() {
    const navigate = useNavigate();
    console.log(localStorage.getItem('accessToken'));
    
    useEffect(() => {
        console.log('bri');
        const accessToken = localStorage.getItem('accessToken');
        fetch('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: {
                'X-Authorization': accessToken
            }
        })
            .then((res) => {
                console.log(res);
                if (res.status === 204) {
                    console.log('You have logged out successfully');
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('role');
                    navigate(Path.Home)
                } else if (res.status === 403) {
                    console.error('Access forbidden. Check your access token and permissions.');
                } else {
                    throw new Error(`Failed to log out - response status: ${res.status} - ${res.statusText}`);
                }
            })

    }, [])
    return null;
}

export default Logout
