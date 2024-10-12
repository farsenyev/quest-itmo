import { TEvent } from "src/types/event";
import { ContentCard } from "@vkontakte/vkui";
// import { QRCodeComponent } from "../../../../components/qrGenerator";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

interface Props {
    event: TEvent;
}

export const EventCard = (props: Props) => {
    const { event } = props;
    let { id, authorId, startDate, endDate, title, imgSrc } = event;
    const router = useRouteNavigator();

    if (!imgSrc) imgSrc = 'https://static.vecteezy.com/system/resources/thumbnails/007/570/292/small/several-young-people-are-gathering-and-talking-free-vector.jpg'

    const onEventCardClick = (id: number) => {
        router.push(`/event/${id}`);
    };

    return (
        <ContentCard
            subtitle={`author_id: ${authorId}`}
            header={title}
            src={imgSrc}
            maxHeight={150}
            height={100}
            caption={`${startDate.toLocaleString().slice(0, -3)}-${endDate.toLocaleString().slice(0, -3)}`}
            hasHover
            onClick={() => onEventCardClick(id)}
        ></ContentCard>
    );
};
