import { Panel, PanelHeader, PanelProps, CardScroll, Group } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { beItmo } from "../../consts/quests/quests";
import { TQuest } from "src/types/quest";
import { FaHeart } from "react-icons/fa";
import { IoMedical } from "react-icons/io5";
import { QuestCard } from "./components/QuestCard/QuestCard";
import { CustomGrid } from "src/components/CustomGrid/CustomGrid";

const quests: TQuest[] = [
    {
        id: 1,
        title: "be friendly",
        description: "text",
        color: "#ef85b4",
        Icon: <FaHeart size={36} />,
    },
    {
        id: 2,
        title: "be healthy",
        description: "text",
        color: '#e83757',
        Icon: <IoMedical size={36} />,
    },

];

export const QuestsPanel = (props: PanelProps) => {
    const { ...rest } = props;
    const router = useRouteNavigator();

    const onQuestCardClick = (questId: number) => {
        router.push(`/quest/${questId}`);
    };

    return (
        <Panel {...rest} disableBackground>
            <PanelHeader fixed>Quests</PanelHeader>
            <CustomGrid margin="auto" gap={"m"}>
                {quests.map((quest) => (
                    <QuestCard
                        key={quest.id}
                        quest={quest}
                        onClick={() => onQuestCardClick(quest.id)}
                    />
                ))}

                <Group>
                    <CardScroll size={"s"}>
                        {quests.map((quest) => (
                            <QuestCard
                                key={quest.id}
                                quest={quest}
                                onClick={() => onQuestCardClick(quest.id)}
                                style={{background: quest.color}}
                            />
                        ))}
                    </CardScroll>
                </Group>
            </CustomGrid>
        </Panel>
    );
};
