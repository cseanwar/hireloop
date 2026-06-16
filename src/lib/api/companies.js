import { protectedFetch, serverFetch } from "../core/server";
import { getUserSession } from "../core/session";

export const getCompanies = async () => {
  try {
    const data = await protectedFetch("/api/companies");
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch companies:", error);
    return [];
  }
};

export const getRecruiterCompany = async (recruiterId) => {
    return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
}

export const getLoggedInRecruiterCompany = async () => {
    const user = await getUserSession();
    return getRecruiterCompany(user?.id);
}