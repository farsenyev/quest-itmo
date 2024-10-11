import { TEvent } from "src/types/event";
import { EventCard } from "../EventCard/EventCard";
import { SimpleGrid } from "@vkontakte/vkui";

interface Props {
    events: TEvent[];
}

export const EventList = (props: Props) => {
    const { events } = props;

    return (
        <SimpleGrid gap={"m"}>
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </SimpleGrid>
    );
};
