import styles from "./QuestCard.module.css";

import { TQuest } from "src/types/quest";
import { Banner, BannerProps } from "@vkontakte/vkui";

interface Props extends BannerProps {
    quest: TQuest;
}

export const QuestCard = (props: Props) => {
    const {
        quest: { title, Icon, color },
        ...rest
    } = props;
    console.log(color)
    return (
        <Banner
            className={styles["QuestCard"]}
            size="m"
            asideMode="expand"
            before={Icon}
            header={title}
            mode='image'
            background={<div style={{backgroundColor: color}}/>}
            {...rest}
            style={{textWrap: 'nowrap', display: 'inline-block', width: '12rem', height: '12rem'}}
        />
    );
};
