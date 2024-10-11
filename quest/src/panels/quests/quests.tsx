import {
    Panel,
    PanelHeader,
    PanelProps,
    CardGrid,
    Card,
} from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { beItmo } from "../../consts/quests/quests";

export const QuestPanel = (props: PanelProps) => {
    const { ...rest } = props;
    const router = useRouteNavigator();

    const toCategory = (category: string) => {
        const PATH = "/quests/:category";
        router.push(PATH, { category }, { keepSearchParams: true });
    };

    return (
        <Panel {...rest} disableBackground>
            <PanelHeader>Категории be</PanelHeader>
            <CardGrid size={"l"}>
                {beItmo.map((be) => (
                    <Card
                        mode={"outline"}
                        key={be.name}
                        onClick={() => toCategory(be.name)}
                    >
                        <h4>{be.name}</h4>
                    </Card>
                ))}
            </CardGrid>
        </Panel>
    );
};
