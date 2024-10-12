export const makeRequest = async (
    method: string,
    url: string,
    params?: { [key: string]: unknown },
) => {
    try {
        const response = await fetch(
            `${import.meta.env.SERVER_BASE_URL}${url}`,
            {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `VK ${btoa(window.location.search)}`,
                    ...params,
                },
            },
        );

        const result = await response.json();

        return result;
    } catch (err) {
        return Promise.reject(err);
    }
};
