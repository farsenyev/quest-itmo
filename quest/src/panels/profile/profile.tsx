import {
    Panel,
    PanelProps,
    Avatar,
    Flex,
    PanelHeader,
    FixedLayout,
    Gradient,
    Button,
    Placeholder,
} from "@vkontakte/vkui";
import { useProfileContext } from "src/contexts/profileContext";

export const ProfilePanel = (props: PanelProps) => {
    const { ...rest } = props;

    const { profile } = useProfileContext();

    return (
        <Panel {...rest} disableBackground>
            <PanelHeader>Profile</PanelHeader>
            <FixedLayout vertical="bottom">
                <Gradient to="top">
                    <Flex justify="center" style={{ padding: 32 }}>
                        <Button>Click</Button>
                    </Flex>
                </Gradient>
            </FixedLayout>

            <Gradient mode="tint" to="top">
                <Placeholder
                    icon={<Avatar size={96} />}
                    header={`${profile?.first_name} ${profile?.last_name}`}
                    action={
                        <Button size="m" mode="secondary">
                            Редактировать
                        </Button>
                    }
                >
                    {profile?.role}
                </Placeholder>
            </Gradient>
            <div></div>
        </Panel>
    );
};
