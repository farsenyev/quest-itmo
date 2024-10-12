export const createNewUser = async (vkUserId: number) => {
    try {
        const response = await fetch(`http://localhost:3000/api/user/new`, {
            method: "POST",
            body: JSON.stringify({ vkUserId, role: "STUDENT" }),
        });

        const result = await response.json();

        return result;
    } catch (err) {
        return Promise.reject(err);
    }
};
