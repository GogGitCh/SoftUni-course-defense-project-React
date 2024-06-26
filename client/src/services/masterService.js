const baseUrl = "http://localhost:3030/customers";
const plastersUrl = "http://localhost:3030/data/sites";

const token = localStorage.getItem("accessToken");
const userId = localStorage.getItem("userId");

export const getUser = async () => {
    try {
        const res = await fetch(`${plastersUrl}`, {
            method:'GET',
            // headers: {
            //     "Content-Type": "application/json",
            //     "X-Authorization": token,
            // },
        });
        const response = await res.json();
        console.log(response)
        return response;

    } catch (error) {
        console.log(error);
    }
}