import { apiRequest } from "./request";


export const getLeads = async () => {
  try {

    const session = JSON.parse(sessionStorage.getItem("userSession"));
    const profileId = session?.profileId;

    const response = await apiRequest({
      path: `/leads/getallleads`,
      params: profileId ? { profileId } : undefined,
    });

    return response.data;

  } catch (error) {
    console.error("Error fetching leads:", error);
    throw error;
  }
};

export const getLeadsBySource = async () => {
    try {
        const response = await apiRequest({ path: "/leads/stats" })
        return response.data
    } catch (error) {
        console.error("Error fetching leads by source:", error)
        throw error
    }
}

export const getAllStatusFlowLeads = async (profileId) => {
  try {
    const response = await apiRequest({
      path: `/leads/getallleads`,
      params: profileId ? { profileId } : undefined,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching leads by source:", error);
    throw error;
  }
};
export const postAllStatusFlowLeads = async (data) => {
    try {
        const response = await apiRequest({
            method: "POST",
            path: "/leads/create",
            data,
        })
        return response.data
    } catch (error) {
        console.error("Error posting leads by source:", error)
        throw error
    }
}

export const putAllStatusFlowLeads = async (id, data) => {
    try {
        const response = await apiRequest({
            method: "PUT",
            path: `/leads/update/${id}`,
            data,
        })
        return response.data
    } catch (error) {
        console.error("Error putting leads by source:", error)
        throw error
    }
}

export const deleteStatusFlowLeads = async (id) => {
    try {
        const response = await apiRequest({
            method: "DELETE",
            path: `/leads/${id}`,
        })
        return response.data
    } catch (error) {
        console.error("Error deleting leads by source:", error)
        throw error
    }
}
