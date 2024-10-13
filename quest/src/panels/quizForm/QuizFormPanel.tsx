import styles from "./QuizFormPanel.module.css";

import { Panel, PanelHeader, PanelProps } from "@vkontakte/vkui";
import { QuizForm } from "../quizForm/QuizForm/QuizForm";
import { useParams } from "@vkontakte/vk-mini-apps-router";

export const QuizFormPanel = (props: PanelProps) => {
    const { ...rest } = props;

    const params = useParams<"role">();
    const role = params?.role;

    return (
        <Panel className={styles["QuizFormPanel"]} {...rest}>
            <PanelHeader delimiter="none" />
            <div className={styles["PanelContent"]}>
                <QuizForm role={role} />
            </div>
        </Panel>
    );
};
