import { useQuery } from "@tanstack/react-query"
import { getOrders } from "../service/order.service"

export const useFetchOrder = () => {
    return useQuery({
        queryKey: [],
        queryFn: getOrders
    })
}