import {
    Panel,
    PanelProps,
    GridAvatar,
    Flex,
    Avatar,
    Button,
    SimpleCell,
    Header,
    Group,
    PanelHeader,
} from "@vkontakte/vkui";

import { Icon20GiftCircleFillRed } from "@vkontakte/icons"


export const CommunityPanel = (props: PanelProps) => {
    const { ...rest } = props;

    return (
        <Panel {...rest} disableBackground>
            <h1>Community</h1>
            <Group
                style={{ margin: 20 }}
                header={<Header mode="primary">Таблица лидеров</Header>}
            >
                <SimpleCell subtitle="Победитель"
                    style={{ padding: 10 }}
                    before={
                         <Avatar
                            src={
                                "https://sun9-5.userapi.com/impg/vkHhyz8EElguKl_9by5DrAhWesMajCUv_Ek25g/Vrwa7FIoZpE.jpg?size=2560x2560&quality=95&sign=831a1d43957e4cb3bf4adb942a47637b&type=album"
                            }
                            
                        />
                    }
                > 
                    Олеся Якуничева 
                </SimpleCell>

                <SimpleCell subtitle="Призёр"
                    style={{ padding: 10 }}
                    before={
                        <Avatar
                            src={
                                "https://sun9-38.userapi.com/impg/nUJ3m-qRjJUYPjN5dM6mWO3zH52Ba6bItiGuCg/6lTH3L7SVng.jpg?size=1620x2160&quality=95&sign=345b3fbdd443a39b1f085177d39dd4c3&type=album"
                            }
                        />
                    }
                >
                    Дарья Абрамова
                </SimpleCell>

                <SimpleCell subtitle="Призёр"
                    style={{ padding: 10 }}
                    before={
                        <Avatar
                            src={
                                "https://sun9-55.userapi.com/impg/NmTdgqYP4klWCelOtJxGVrQeD0aV9Q1ah3x4rg/CjczXlYExCg.jpg?size=2560x1707&quality=95&sign=e9a49caa0694d8668118e8a6e5f152ec&type=album"
                            }
                        />
                    }
                >
                    Ольга Крест
                </SimpleCell>

                <SimpleCell
                    style={{ padding: 10 }}
                    before={
                        <Avatar
                            src={
                                "https://sun9-52.userapi.com/impg/j_SWrTXvrpSqeWrN1BfkuRQKh0qlyN596m2mPA/2cUicT9yTGs.jpg?size=2560x1707&quality=95&sign=597e4a2be64cde913ff3f9b966ebdb62&type=album"
                            }
                        />
                    }
                >
                    Антон Анихнов
                </SimpleCell>
                <SimpleCell
                    style={{ padding: 10 }}
                    before={
                        <Avatar
                            src={
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcNMReFCqQhjXgn9r8THCLTK3lYib256XaA&s"
                            }
                        />
                    }
                >
                    Иван Итмошников
                </SimpleCell>
            </Group>
        </Panel>
    );
};
