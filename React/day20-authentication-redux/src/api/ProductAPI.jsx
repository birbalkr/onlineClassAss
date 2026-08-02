
import { axiosInstance } from "../config/axiosInstance";

export let getProductsDataAPI = async () => {
    try {
        let res = await axiosInstance.get("https://dummyjson.com/products");
        return res.data.products;

    } catch (error) {
        console.log("error in product api", error);
    }

}