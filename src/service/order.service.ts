import axios from "axios"

export const getOrders = async () => {
    const {data} = await axios.get('https://dummyjson.com/products?limit=300');
    return data;
}