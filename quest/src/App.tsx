import {
    SplitLayout,
    SplitCol,
    View,
    useAdaptivityConditionalRender,
} from "@vkontakte/vkui";
import { Epic } from "@vkontakte/vkui";
import {
    useActiveVkuiLocation,
    usePopout,
} from "@vkontakte/vk-mini-apps-router";
import { EPanels } from "./consts/panels/panels";
import { EViews } from "./consts/views/veiws";
import { HomePanel } from "./panels/home/home";
import { CommunityPanel } from "./panels/community/community";
import { ProfilePanel } from "./panels/profile/profile";
import { QuestPanel } from "./panels/quests/quests";
import { CategoryPanel } from "./panels/category/category";
import { EventsPanel } from "./panels/events/events";
import "@vkontakte/vkui/dist/vkui.css";
import { AppTabBar } from "./components/tabbar";
import { AppModalRoot } from "./components/appModalRoot";
import { EventPanel } from "./panels/event/event";
import { useProfile } from "./hooks/useProfile";
import { useEffect } from "react";

export const App = () => {
    const { initProfile } = useProfile();
    const {
        view: activeView = EViews.QUESTS,
        panel: activePanel = EPanels.QUESTS,
    } = useActiveVkuiLocation();
    const routerPopout = usePopout();

    useEffect(() => {
        initProfile();
    }, []);

    return (
        <SplitLayout modal={<AppModalRoot />} popout={routerPopout}>
            <SplitCol>
                <Epic
                    activeStory={activeView}
                    tabbar={<AppTabBar activeStory={activeView as EViews} />}
                >
                    <View id={EViews.HOME} activePanel={activePanel}>
                        <HomePanel id={EPanels.HOME} />
                    </View>
                    <View id={EViews.COMMUNITY} activePanel={activePanel}>
                        <CommunityPanel id={EPanels.COMMUNITY} />
                    </View>
                    <View id={EViews.PROFILE} activePanel={activePanel}>
                        <ProfilePanel id={EPanels.PROFILE} />
                    </View>
                    <View id={EViews.QUESTS} activePanel={activePanel}>
                        <QuestPanel id={EPanels.QUESTS} />
                        <CategoryPanel id={EPanels.CATEGORY} />
                    </View>
                    <View id={EViews.EVENTS} activePanel={activePanel}>
                        <EventsPanel id={EPanels.EVENTS} />
                        <EventPanel id={EPanels.EVENT} />
                    </View>
                </Epic>
            </SplitCol>
        </SplitLayout>
    );
};
