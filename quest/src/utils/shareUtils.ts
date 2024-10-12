import bridge from "@vkontakte/vk-bridge";

export const shareOnWall = (message, attachments) => {
    bridge.send('VKWebAppShowWallPostBox', {
        message,
        attachments
    })
        .then((data) => {
            if (data.post_id) {
                // Запись размещена
            }
        })
        .catch((error) => {
            // Ошибка
            console.log(error);
        });
}

export const shareInHistory = () => {
    bridge.send('VKWebAppShowStoryBox', {
        background_type: 'image',
        url : 'https://sun9-65.userapi.com/c850136/v850136098/1b77eb/0YK6suXkY24.jpg',
        attachment: {
            text: 'book',
            type: 'photo',
            owner_id: 375696073,
            id: 12345678
        }})
        .then((data) => {
            if (data.code_data) {
                // Редактор историй открыт
                console.log(data);
            }})
        .catch((error) => {
            // Ошибка
            console.log(error);
        });
}