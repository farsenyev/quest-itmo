import styles from "./QuestCard.module.css";

import { TQuest } from "src/types/quest";
import { Banner, BannerProps } from "@vkontakte/vkui";

interface Props extends BannerProps {
    quest: TQuest;
}

export const QuestCard = (props: Props) => {
    const {
        quest: { title, Icon },
        ...rest
    } = props;
    return (
        <Banner
            className={styles["QuestCard"]}
            size="m"
            asideMode="expand"
            before={Icon}
            header={title}
            {...rest}
        />
    );
};
