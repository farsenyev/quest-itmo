import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import {EViews} from "../consts/views/veiws";
import {HomeSVG} from "../svg/home";
import {CommunitySVG} from "../svg/community";
import {ProfileSVG} from "../svg/profile";
import {QuestsSVG} from "../svg/quests";

interface Props {
    activeStory: EViews;
}

export const AppTabBar = (props: Props) => {
    const { activeStory } = props;
    const routerNavigator = useRouteNavigator();

    return (
        <Tabbar>
            <TabbarItem
                onClick={() => void routerNavigator.push('/')}
                selected={activeStory === EViews.HOME}
                data-story={EViews.HOME}
                aria-label="home"
            >
                <HomeSVG/>
            </TabbarItem>
            <TabbarItem
                onClick={() => void routerNavigator.push('/community')}
                selected={activeStory === EViews.COMMUNITY}
                data-story={EViews.COMMUNITY}
                aria-label="community"
            >
                <CommunitySVG />
            </TabbarItem>
            <TabbarItem
                onClick={() => void routerNavigator.push('/profile')}
                selected={activeStory === EViews.PROFILE}
                data-story={EViews.PROFILE}
                aria-label="profile"
            >
                <ProfileSVG />
            </TabbarItem>
            <TabbarItem
                onClick={() => void routerNavigator.push('/quests')}
                selected={activeStory === EViews.QUESTS}
                data-story={EViews.QUESTS}
                aria-label="quests"
            >
                <QuestsSVG />
            </TabbarItem>
        </Tabbar>
    );
};