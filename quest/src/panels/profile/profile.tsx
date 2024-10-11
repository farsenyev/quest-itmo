import { Panel, PanelProps } from "@vkontakte/vkui";

export const ProfilePanel = (props: PanelProps) => {
    const { ...rest } = props;

    return (
        <Panel {...rest} disableBackground>
            <h1>Profile</h1>
        </Panel>
    );
};
