import { Panel, PanelHeader, PanelProps } from "@vkontakte/vkui";

export const ProfilePanel = (props: PanelProps) => {
    const { ...rest } = props;

    return (
        <Panel {...rest} disableBackground>
            <PanelHeader fixed>Profile</PanelHeader>
        </Panel>
    );
};
