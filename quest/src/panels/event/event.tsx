import { Panel, PanelHeader, PanelProps } from "@vkontakte/vkui";
import { useParams } from "@vkontakte/vk-mini-apps-router";
import { useEventContext } from "src/contexts/eventContext";
import { QRCodeComponent } from "src/components/qrGenerator";

export const EventPanel = (props: PanelProps) => {
    const params = useParams<"id">();
    const eventId = params?.id;

    const { events } = useEventContext();

    const event = eventId
        ? events.find((event) => event.id === +eventId)
        : undefined;

    const { ...rest } = props;

    return (
        <Panel {...rest} mode="plain">
            <PanelHeader fixed>{event?.title}</PanelHeader>
            {event && event.url ? (
                <QRCodeComponent url={event.url} />
            ) : undefined}
        </Panel>
    );
};
