import { apiRequest } from "./request";


export const getStaff = async () => {
    try {
        const response = await apiRequest({ path: "/staff/alllist" })
        return response.data
    } catch (error) {
        console.error("Error fetching staff:", error)
        throw error
    }
}

export const postStaff = async (data) => {
    try {
        const response = await apiRequest({
            method: "POST",
            path: "/staff/create",
            data,
        })
        return response.data
    } catch (error) {
        console.error("Error posting staff:", error)
        throw error
    }
}

export const putStaff = async (id, data) => {
    try {
        const response = await apiRequest({
            method: "PUT",
            path: `/staff/${id}`,
            data,
        })
        return response.data
    } catch (error) {
        console.error("Error putting staff:", error)
        throw error
    }
}

export const deleteStaff = async (id) => {
    try {
        const response = await apiRequest({
            method: "DELETE",
            path: `/staff/${id}`,
        })
        return response.data
    } catch (error) {
        console.error("Error deleting staff:", error)
        throw error
    }
}
