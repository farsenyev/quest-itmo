import { Panel, PanelHeader, PanelProps } from "@vkontakte/vkui";
import { useParams } from "@vkontakte/vk-mini-apps-router";

export const QuestPanel = (props: PanelProps) => {
    const params = useParams<"id">();
    const questId = params?.id;

    const { ...rest } = props;

    return (
        <Panel {...rest} mode="plain">
            <PanelHeader fixed>{`Quest #${questId}`}</PanelHeader>
        </Panel>
    );
};
