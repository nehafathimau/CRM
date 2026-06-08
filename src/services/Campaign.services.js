import { apiRequest } from "./request";


export const getCampaignOverallViewData = async () => {

    try {
        const response = await apiRequest({ path: "/campaigns/analytics/summary" });
        return response.data;
    }
    catch (error) {
        throw error;
    }
}


export const getLeadsBySource = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await apiRequest({ path: "/analytics/leads-by-source" });
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const getAllcampaignsRoot = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await apiRequest({ path: "/campaigns/getallcampaigns" });
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const postAllcampaignsRoot = async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await apiRequest({
            method: "POST",
            path: "/campaigns/create",
            data,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const putAllcampaignsRoot = async (id, data) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await apiRequest({
            method: "PUT",
            path: `/campaigns/${id}`,
            data,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const deleteCampaignsRoot = async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await apiRequest({
            method: "DELETE",
            path: `/campaigns/${id}`,
        });
        console.log(id);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}


