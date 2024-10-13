import {
    Panel,
    PanelHeader,
    PanelProps,
    View,
    Group,
    Flex,
    Cell,
    Avatar,
    Button,
} from "@vkontakte/vkui";
import { useProfileContext } from "src/contexts/profileContext";
import {
    Icon20CoinsOutline,
    
    
} from "@vkontakte/icons";

import { AchievementsPanel } from "./components/achievements";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";



export const ProfilePanel = (props: PanelProps) => {
    const { ...rest } = props;
    const router = useRouteNavigator()

    const { profile } = useProfileContext();
 
    return (
        <Panel {...rest} disableBackground>
            <PanelHeader fixed>Profile</PanelHeader>

            <View activePanel="list">
                <Panel id="list">
                    <Group>
                        <Flex direction="row" justify="space-between">
                            <Cell
                                before={<Avatar />}
                                subtitle={`${profile ? profile.role : "Студент"}`}
                            >
                                {`${profile?.first_name} ${profile?.last_name}`}
                            </Cell>
                            <Cell after={<Icon20CoinsOutline />}>
                                {` ${profile ? profile.tokenAmount : 10} Mee `}{" "}
                            </Cell>
                        </Flex>
                    </Group>

                    <AchievementsPanel />

                    <Button
                        size="l"
                        mode="outline"
                        align="center"
                        marginWidth={20}
                        onClick={() => router.push('/develop')}
                    >
                        Форма для получения доступа
                    </Button>
                </Panel>
            </View>
        </Panel>
    );
};
