import axios from "axios";
const BaseURL = "https://api.escuelajs.co/api/v1"

export const getAllProducts = async () => { //async function always return a promise.
    const url = `${BaseURL}/products`;
    try {
        const { data } = await axios.get(url)
        console.log(data)
        return data;

    } catch (error) {
        return error;
    }
}