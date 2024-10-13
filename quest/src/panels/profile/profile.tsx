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
} from "@vkontakte/vkui";
import { useProfileContext } from "src/contexts/profileContext";
import { Icon20TestCoinOutline } from "@vkontakte/icons";

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
                            <Cell before={<Avatar />} subtitle="Студент">
                                Иван Итмошников
                            </Cell>
                            <Cell>{` ${profile?.tokenAmount} Токенов`}</Cell>
                        </Flex>
                    </Group>

                    <Flex justify="center"></Flex>

                    <Flex justify="center"></Flex>
                    <Group mode="plain">
                        <Flex justify="center" align="center">
                            <CardGrid size="l">
                                <div>
                                    <Group
                                        header={
                                            <Header mode="secondary">
                                                Достижения
                                            </Header>
                                        }
                                    >
                                        <SimpleCell
                                            style={{ padding: 16 }}
                                            before={
                                                <Image
                                                    src={
                                                        "https://vkma-course-dishes-backend.prod.kapps.vk-apps.com/storage/achivements/8orders.png"
                                                    }
                                                />
                                            }
                                        >
                                            Получить первые баллы
                                        </SimpleCell>
                                        <SimpleCell
                                            style={{ padding: 16 }}
                                            before={
                                                <Image
                                                    src={
                                                        "https://vkma-course-dishes-backend.prod.kapps.vk-apps.com/storage/achivements/5orders.png"
                                                    }
                                                />
                                            }
                                        >
                                            Посетить мероприятие 5 раз
                                        </SimpleCell>
                                        <SimpleCell
                                            style={{ padding: 16 }}
                                            before={
                                                <Image
                                                    src={
                                                        "https://vkma-course-dishes-backend.prod.kapps.vk-apps.com/storage/achivements/first_order.png"
                                                    }
                                                />
                                            }
                                        >
                                            Посетить мероприятие 15 раз
                                        </SimpleCell>
                                    </Group>
                                </div>
                            </CardGrid>
                        </Flex>
                    </Group>

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
