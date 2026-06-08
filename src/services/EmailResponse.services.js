import { apiRequest } from "./request";


export const getEmailResponse = async () => {
    try {
        const response = await apiRequest({ path: "/logs/dashboard" })
        return response.data
    } catch (error) {
        console.error("Error fetching email response:", error)
        throw error
    }
}

export const postEmailResponse = async (data) => {
    try {
        const response = await apiRequest({
            method: "POST",
            path: "/logs/activity",
            data,
        })
        return response.data
    } catch (error) {
        console.error("Error posting email response:", error.response.data.message)
        throw error
    }
}
