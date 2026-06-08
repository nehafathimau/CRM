import { apiRequest } from "./request";




export const getMonthlyLeads = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await apiRequest({ path: "/analytics/monthly-leads" });
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const getLeadsByRange = async (range = "1D", type, status) => {
    const params = { range };
    if (type && type !== 'All Types') params.type = type;
    if (status && status !== 'All Statuses') params.status = status;

    const response = await apiRequest({
        path: "/analytics/leads",
        params,
    });

    return response.data;
};

export const getDashboardData = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await apiRequest({ path: "/analytics/dashboard" });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getCampaignStatus = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await apiRequest({ path: "/analytics/campaign-status" });
        return response.data;
    } catch (error) {
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
