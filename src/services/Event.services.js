import { apiRequest } from "./request";


export const getEvents = async () => {
    try {
        const response = await apiRequest({ path: "/events/getallevents" })
        return response.data
    } catch (error) {
        console.error("Error fetching events:", error)
        throw error
    }
}


export const postEvents = async (data) => {
    try {
        const response = await apiRequest({
            method: "POST",
            path: "/events/create",
            data,
        })
        return response.data
    } catch (error) {
        console.error("Error posting events:", error)
        throw error
    }
}


export const putEvents = async (id, data) => {
    try {
        const response = await apiRequest({
            method: "PUT",
            path: `/events/${id}`,
            data,
        })
        return response.data
    } catch (error) {
        console.error("Error putting events:", error)
        throw error
    }
}


export const deleteEvents = async (id) => {
    try {
        const response = await apiRequest({
            method: "DELETE",
            path: `/events/${id}`,
        })
        return response.data
    } catch (error) {
        console.error("Error deleting events:", error)
        throw error
    }
}
