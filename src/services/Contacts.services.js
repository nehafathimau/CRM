import { apiRequest } from "./request";


export const getAssignedStaff = async () => {
    try {
        const response = await apiRequest({ path: "/staff/alllist" })
        return response.data
    } catch (error) {
        console.error("Error fetching staff:", error)
        throw error
    }
}



export const getStats = async () => {
    try {
        const response = await apiRequest({ path: "/contacts/stats" })
        return response.data
    } catch (error) {
        console.error("Error fetching contacts:", error)
        throw error
    }
}


export const getContacts = async () => {
    try {
        const response = await apiRequest({ path: "/contacts/getall" })
        return response.data
    } catch (error) {
        console.error("Error fetching contacts:", error)
        throw error
    }
}


export const postContacts = async (data) => {
    try {
        const response = await apiRequest({
            method: "POST",
            path: "/contacts/create",
            data,
        })
        return response.data
    } catch (error) {
        console.error("Error posting contacts:", error)
        throw error
    }
}


export const putContacts = async (id, data) => {
    try {
        const response = await apiRequest({
            method: "PUT",
            path: `/contacts/${id}`,
            data,
        })
        return response.data
    } catch (error) {
        console.error("Error putting contacts:", error)
        throw error
    }
}


export const deleteContacts = async (id) => {
    try {
        const response = await apiRequest({
            method: "DELETE",
            path: `/contacts/${id}`,
        })
        return response.data
    } catch (error) {
        console.error("Error deleting contacts:", error)
        throw error
    }
}
