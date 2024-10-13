import { Panel, PanelHeader, PanelProps } from "@vkontakte/vkui";

export const HomePanel = (props: PanelProps) => {
    const { ...rest } = props;

    return (
        <Panel {...rest} mode="plain">
            <PanelHeader fixed>{}</PanelHeader>
        </Panel>
    );
};
