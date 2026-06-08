import apiInterceptor from "../interceptors/interceptors"


export const profileUpdate = async (id, data) => {
    try {
        const response = await apiInterceptor.put(`/profile/update/${id}`, data)
        return response.data
    } catch (error) {
        console.error("Error updating profile:", error)
        throw error
    }
}


export const getProfileByEmail = async (email) => {
  const response = await apiInterceptor.get(`/profile/email/${email}`);
  return response.data;
};

export const getProfileStats = async () =>{
    const response = await apiInterceptor.get(`/profile/stats`);
    return response.data;
}