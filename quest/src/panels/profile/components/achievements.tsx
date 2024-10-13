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
    CardGrid,
    Card,
    Tabs,
    TabsItem,

} from "@vkontakte/vkui";
import React from "react";


export const AchievementsPanel = () => {
    const noop = () => {};
    const [tab, setTab] = React.useState("dialogs");

    
    return (
        <>
            <Group mode="plain">
                <Group
                    mode="plain"
                    header={
                        <Header mode="primary" size="large">
                            Достижения
                        </Header>
                    }
                >
                    <View activePanel="panel">
                    <Panel id="panel">
  
          
        </Panel>
                    </View>

                    <Tabs>
                        <TabsItem
                            selected={tab === "dialogs"}
                            onClick={() => setTab("dialogs")}
                        >
                            Открытые
                        </TabsItem>
                        <TabsItem
                            selected={tab === "messages"}
                            onClick={() => setTab("messages")}
                        >
                            Закрытые
                        </TabsItem>
                    </Tabs>


                    <CardGrid size="l" spaced>
                        <Card mode="shadow">
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
                                Получить награду первый раз
                            </SimpleCell>
                        </Card>
                        <Card mode="shadow">
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
                        </Card>

                        <Card>
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
                        </Card>
                    </CardGrid>
                </Group>
            </Group>
        </>
    );
};



