import { TEvent } from "src/types/event";
import { ContentCard } from "@vkontakte/vkui";
// import { QRCodeComponent } from "../../../../components/qrGenerator";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

interface Props {
    event: TEvent;
}

export const EventCard = (props: Props) => {
    const { event } = props;
    const { id, authorId, date, title, imgSrc } = event;
    const router = useRouteNavigator();

    const onEventCardClick = (id: number) => {
        router.push(`/event/${id}`);
    };

    return (
        <ContentCard
            subtitle={`author_id: ${authorId}`}
            header={title}
            src={imgSrc}
            caption={date.toString()}
            maxHeight={150}
            hasHover
            onClick={() => onEventCardClick(id)}
        ></ContentCard>
    );
};
