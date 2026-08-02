import { useQuery } from "@tanstack/react-query";
import { getProductsDataAPI } from "../api/ProductAPI";


export const useProductAPI = () => {
    let { data, isPending } = useQuery({
        queryKey: ['products'],
        queryFn: getProductsDataAPI,
        staleTime: 5000,
    });

    return { data, isPending };
}

