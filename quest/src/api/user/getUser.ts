import { makeRequest } from "../makeRequest";

export const getUser = (vkUserId: number) =>
    makeRequest("GET", `/api/user/${vkUserId}`);
