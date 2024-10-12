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
    CardGrid,
    Group,
    Header,
    SimpleCell,
    Image,
} from "@vkontakte/vkui";
import { useProfileContext } from "src/contexts/profileContext";
import { Icon20TestCoinOutline } from "@vkontakte/icons";

export const ProfilePanel = (props: PanelProps) => {
    const { ...rest } = props;

    const { profile } = useProfileContext();

    return (
        <Panel {...rest} disableBackground>
            <PanelHeader>Profile</PanelHeader>
            <FixedLayout vertical="bottom">
                <Gradient to="top"></Gradient>
            </FixedLayout>

            <Gradient mode="tint" to="top">
                <Placeholder
                    icon={
                        <Avatar
                            size={96}
                            src={
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcNMReFCqQhjXgn9r8THCLTK3lYib256XaA&s"
                            }
                        />
                    }
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
            <Flex justify="center">
                <SimpleCell
                    before={<Icon20TestCoinOutline />}
                    style={{ padding: 30 }}
                    subtitle="100 токенов"
                >
                    Начислено
                </SimpleCell>
            </Flex>

            <Flex justify="center"></Flex>
            <Group mode="plain">
                <Flex justify="center" align="center">
                    <CardGrid size="l">
                        <div style={{ height: 190, width: 900 }}>
                            <Group
                                header={
                                    <Header mode="secondary">Достижения</Header>
                                }
                            >
                                <SimpleCell
                                    style={{ padding: 25 }}
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
                                    style={{ padding: 25 }}
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
                                    style={{ padding: 25 }}
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
        </Panel>
    );
};
