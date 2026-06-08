import apiInterceptor from "../interceptors/interceptors";


export const GetNotificationsService = async () => {
    try {
        const response = await apiInterceptor.get("/notifications/getall");
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const DeleteNotificationService = async (id) => {
    try {
        const response = await apiInterceptor.delete(`/notifications/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const ClearAllNotificationsService = async () => {
    try {
        const response = await apiInterceptor.delete("/notifications/clear");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const MarkNotificationAsReadService = async (id) => {
    try {
        const response = await apiInterceptor.put(`/notifications/read/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}