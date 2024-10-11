import { Panel, PanelProps } from "@vkontakte/vkui";
import { EventList } from "./components/EventList/EventList";
import { TEvent } from "src/types/event";

const events: TEvent[] = [
    {
        authorId: 1,
        date: new Date(),
        description: "text",
        id: 1,
        title: "Event #1",
        imgSrc: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export const EventPanel = (props: PanelProps) => {
    const { ...rest } = props;

    return (
        <Panel {...rest}>
            <EventList events={events} />
        </Panel>
    );
};
