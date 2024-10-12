import bridge from "@vkontakte/vk-bridge";

export const Bridges = bridge.send('VKWebAppShowSlidesSheet', {
  slides: [
    {
      media: {
        blob: 'data:image/png;base64,[IMAGE_DATA]',
        type: 'image'
      },
      title: 'Погружайся в культуру ITMO: будь смелым, будь ITMO!',
      subtitle: 'Познавай ценности ITMO, открывай ключевые отделы и их функции, ставь цели и достигай их с командой ITMO'
    }
   ]})
  .then((data) => {
    if (data.result) {
      // Слайды показаны
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });