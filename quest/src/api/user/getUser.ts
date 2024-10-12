export const getUser = async (vkUserId: number) => {
    try {
        const response = await fetch(
            `http://localhost:3000/api/user/${vkUserId}`,
            { method: "GET" },
        );

        const result = await response.json();

        return result;
    } catch (err) {
        return Promise.reject(err);
    }
};
