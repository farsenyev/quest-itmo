import { Panel, PanelHeader, PanelProps } from "@vkontakte/vkui";
import { useProfileContext } from "src/contexts/profileContext";

export const ProfilePanel = (props: PanelProps) => {
    const { ...rest } = props;

    const { profile } = useProfileContext();

    return (
        <Panel {...rest} disableBackground>
            <PanelHeader fixed>Profile</PanelHeader>
            {`Token Amount: ${profile?.tokenAmount}`}
        </Panel>
    );
};
