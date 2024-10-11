import { TEvent } from "src/types/event";
import { ContentCard } from "@vkontakte/vkui";

interface Props {
    event: TEvent;
}

export const EventCard = (props: Props) => {
    const { event } = props;
    const { authorId, date, title, imgSrc } = event;

    return (
        <ContentCard
            subtitle={authorId}
            header={title}
            src={imgSrc}
            caption={date.toString()}
        ></ContentCard>
    );
};
