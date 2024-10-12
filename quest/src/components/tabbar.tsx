import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

import { EViews } from "../consts/views/veiws";
import {
    Icon28CalendarAddOutline,
    Icon28BookSpreadOutline,
    Icon28UserCircleOutline,
    Icon28Users3Outline,
} from "@vkontakte/icons";

interface Props {
    activeStory: EViews;
}

export const AppTabBar = (props: Props) => {
    const { activeStory } = props;
    const routerNavigator = useRouteNavigator();

    return (
        <Tabbar>
            <TabbarItem
                onClick={() => void routerNavigator.push("/quests")}
                selected={activeStory === EViews.QUESTS}
                data-story={EViews.QUESTS}
                aria-label="quests"
            >
                <Icon28BookSpreadOutline />
            </TabbarItem>
            <TabbarItem
                onClick={() => void routerNavigator.push("/community")}
                selected={activeStory === EViews.COMMUNITY}
                data-story={EViews.COMMUNITY}
                aria-label="community"
            >
                <Icon28Users3Outline />
            </TabbarItem>
            <TabbarItem
                onClick={() => void routerNavigator.push("/events")}
                selected={activeStory === EViews.EVENTS}
                data-story={EViews.EVENTS}
                aria-label="events"
            >
                <Icon28CalendarAddOutline />
            </TabbarItem>
            <TabbarItem
                onClick={() => void routerNavigator.push("/profile")}
                selected={activeStory === EViews.PROFILE}
                data-story={EViews.PROFILE}
                aria-label="profile"
            >
                <Icon28UserCircleOutline />
            </TabbarItem>
        </Tabbar>
    );
};
