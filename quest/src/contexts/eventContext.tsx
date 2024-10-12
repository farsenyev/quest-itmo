import { createContext, useContext, useState } from "react";
import { TEvent } from "src/types/event";

const defaultEvents: TEvent[] = [
    {
        id: 1,
        authorId: 1,
        date: new Date(),
        description: "description",
        title: "VK Mini Apps x ITMO Hack",
        imgSrc: "https://optim.tildacdn.com/tild3239-6465-4464-a461-393236353534/-/format/webp/1.png",
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
