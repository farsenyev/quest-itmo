import { createContext, useContext, useState } from "react";
import { TEvent } from "src/types/event";

const defaultEvents: TEvent[] = [
    {
        id: 1,
        authorId: 1,
        startDate: new Date(2024, 9, 11, 16, 0),
        endDate: new Date(2024, 9, 13, 20, 0),
        description:
            "Разработайте мини-приложение ВКонтакте и выиграйте денежный приз",
        title: "VK Mini Apps x ITMO Hack",
        imgSrc: "https://optim.tildacdn.com/tild3239-6465-4464-a461-393236353534/-/format/webp/1.png",
        url: "https://vkma-hack.ru/",
    },
    {
        id: 2,
        authorId: 0,
        startDate: new Date(2024, 8, 26, 9, 0),
        endDate: new Date(2024, 8, 28, 21, 0),
        description: "XIV Международная IT-конференция",
        title: "Стачка",
        imgSrc: "https://spb25.nastachku.ru/design/themes/nastachku_theme_spb24/media/images/banner2.jpg",
        url: "https://spb25.nastachku.ru/",
    },
    {
        id: 3,
        authorId: 1,
        startDate: new Date(2024, 9, 12, 12, 0),
        endDate: new Date(2024, 9, 12, 17, 0),
        description:
            "Карьерный форум для студентов и недавних выпускников IT-направлений",
        title: "Найти IT",
        imgSrc: "https://optim.tildacdn.com/tild6238-6264-4166-a666-353562653064/-/cover/900x720/center/center/-/format/webp/nkQLY5Eb0Ow.jpg",
        url: "https://careerday.fut.ru/findit_spb",
    },
    {
        id: 4,
        authorId: 0,
        startDate: new Date(2024, 11, 11, 10, 0),
        endDate: new Date(2024, 11, 11, 20, 0),
        description: "Масштабные события для бизнеса и предпринимателей",
        title: "Альфа Конфа 24",
        imgSrc: "https://alfabank.servicecdn.ru/site-upload/e1/53/6093/4_Img_KV_1143x762.png",
        url: "https://alfabank.ru/sme/confa/",
    },
];

type TEventContext = {
    events: TEvent[];
    setEvents: React.Dispatch<React.SetStateAction<TEvent[]>>;
};

const EventContext = createContext<TEventContext | null>(null);

export const EventContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [events, setEvents] = useState<TEvent[]>(defaultEvents);

    return (
        <EventContext.Provider value={{ events, setEvents }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEventContext = () => {
    const eventContext = useContext(EventContext);

    if (!eventContext) {
        throw new Error(
            "EventContext must be used within EventContextProvider",
        );
    }

    return eventContext;
};
