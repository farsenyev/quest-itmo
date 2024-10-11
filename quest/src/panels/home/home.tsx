import { Panel, PanelProps } from "@vkontakte/vkui";

export const HomePanel = (props: PanelProps) => {
    const { ...rest } = props;

    return (
        <Panel {...rest} disableBackground>
            <h1>Home</h1>
        </Panel>
    );
};
