import {
    SimpleCell,
    Header,
    Image,
    Panel,
    PanelHeader,
    PanelProps,
    View,
    Group,
    Flex,
    Cell,
    Avatar,
    CardGrid,
    Button,
    Card,
    Tabs,
    TabsItem,
    PanelHeaderButton,
    Div,
} from "@vkontakte/vkui";
import { useProfileContext } from "src/contexts/profileContext";
import {
    Icon20CoinsOutline,
    
    
} from "@vkontakte/icons";

import { AchievementsPanel } from "./components/achievements";



export const ProfilePanel = (props: PanelProps) => {
    const { ...rest } = props;

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
                                Иван Итмошников
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
                    >
                        Форма для получения доступа
                    </Button>
                </Panel>
            </View>
        </Panel>
    );
};
