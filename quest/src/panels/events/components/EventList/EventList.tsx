import { TEvent } from "src/types/event";
import { EventCard } from "../EventCard/EventCard";
import { CustomGrid } from "src/components/CustomGrid/CustomGrid";

interface Props {
    events: TEvent[];
}

export const EventList = (props: Props) => {
    const { events } = props;

    return (
        <CustomGrid gap={"m"} margin="auto">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </CustomGrid>
    );
};
