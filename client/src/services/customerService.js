const baseUrl = "http://localhost:3030/data/sites";
const token = localStorage.getItem("accessToken");

export const createSite = async ({ ...data }) => {
    try {
        const res = await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": token,
            },
        });

        if (!res.ok) {
            throw new Error();
        }

        const response = await res.json();
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const getAll = async () => {
    try {
        const res = await fetch(baseUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": token,
            },
        });

        if (!res.ok) {
            throw new Error();
        }

        const response = await res.json();
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const del = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/${id}`,{
            method:'DELETE',
            headers:{
                "X-Authorization" : token 
            }
        });

        console.log(res);

    } catch (error) {
        console.log(error);
    }
}
