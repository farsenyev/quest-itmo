import { Panel, PanelProps } from '@vkontakte/vkui';

export const CommunityPanel = (props: PanelProps) => {
    const { ...rest } = props;

    return (
        <Panel {...rest} disableBackground>
            <h1>Community</h1>
        </Panel>
    );
};