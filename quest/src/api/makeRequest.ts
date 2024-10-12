export const makeRequest = async (
    method: string,
    url: string,
    params?: { [key: string]: unknown },
) => {
    try {
        console.log(`FETCH URL: ${"http://localhost:3000"}${url}`);

        const response = await fetch(`${"http://localhost:3000"}${url}`, {
            method,
            body,
            headers: {
                "Content-Type": "application/json",
                Authorization: `VK ${btoa(window.location.search)}`,
                ...params,
            },
        });

        const result = await response.json();

        return result;
    } catch (err) {
        return Promise.reject(err);
    }
};
