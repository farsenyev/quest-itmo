import bridge from "@vkontakte/vk-bridge";

export const qrScanner = async (fetchedUser) => {
    try {
        const data = await bridge.send('VKWebAppOpenCodeReader')
        if (data.code_data) {
            const response = await fetch('https://your-server.com/api/credit-coins', { //TODO: change fetch api
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: fetchedUser.id,
                    qrData: data.code_data,
                }),
            });

        const result = await response.json();
        return {code: result.status}
    }
    } catch (error) {
        console.error('Ошибка при обработке QR-кода', error);
    }
}