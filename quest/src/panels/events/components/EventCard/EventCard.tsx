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

    if (!imgSrc) imgSrc = 'https://itmo.ru/file/pages/213/logo_na_plashke_russkiy_chernyy.png'

    const onEventCardClick = (id: number) => {
        router.push(`/event/${id}`);
    };

    return (
        <ContentCard
            subtitle={`author_id: ${authorId}`}
            header={title}
            src={imgSrc}
            caption={`${startDate.toString()}-${endDate.toString()}`}
            maxHeight={150}
            hasHover
            onClick={() => onEventCardClick(id)}
        ></ContentCard>
    );
};
