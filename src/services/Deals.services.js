import { apiRequest } from "./request";


export const getDeals = async () => {
    try {
        const response = await apiRequest({ path: "/deals/getalldeals" })
        return response.data
    } catch (error) {
        console.error("Error fetching deals:", error)
        throw error
    }
}


export const postDeals = async (data) => {
    try {
        const response = await apiRequest({
            method: "POST",
            path: "/deals/create",
            data,
        })
        return response.data
    } catch (error) {
        console.error("Error posting deals:", error)
        throw error
    }
}


export const putDeals = async (id,data) => {
    try {
        const response = await apiRequest({
            method: "PUT",
            path: `/deals/${id}`,
            data,
        })
        return response.data
    } catch (error) {
        console.error("Error putting deals:", error)
        throw error
    }
}


export const deleteDeals = async (id) => {
    try {
        const response = await apiRequest({
            method: "DELETE",
            path: `/deals/${id}`,
        })
        return response.data
    } catch (error) {
        console.error("Error deleting deals:", error)
        throw error
    }
}
