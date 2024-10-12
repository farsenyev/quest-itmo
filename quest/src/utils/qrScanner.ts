import bridge from "@vkontakte/vk-bridge";

export const qrScanner = async (fetchedUser) => {
    try {
        const data = await bridge.send("VKWebAppOpenCodeReader");
        console.log('data', data)
        if (data.code_data) {
            // const response = await fetch(
            //     "https://43ntp6jp-3000.euw.devtunnels.ms/api/qr",
            //     {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify({
            //             userId: fetchedUser.id,
            //             qrData: data.code_data,
            //         }),
            //     },
            // );
            //
            // const result = await response.json();
            // console.log(result)
            // return { code: result.status };

            return true
        }
    } catch (error) {
        console.error("Ошибка при обработке QR-кода", error);
    }
};
