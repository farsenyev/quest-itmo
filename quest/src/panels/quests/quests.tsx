import { Panel, PanelProps } from "@vkontakte/vkui";

export const QuestPanel = (props: PanelProps) => {
    const { ...rest } = props;

    return (
        <Panel {...rest} disableBackground>
            <h1>Quests</h1>
        </Panel>
    );
};
