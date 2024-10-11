import { SplitLayout, SplitCol, View } from "@vkontakte/vkui";
import { Epic } from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";
import { EPanels } from "./consts/panels/panels";
import { EViews } from "./consts/views/veiws";
import { HomePanel } from "./panels/home/home";
import { CommunityPanel } from "./panels/community/community";
import { ProfilePanel } from "./panels/profile/profile";
import { QuestPanel } from "./panels/quests/quests";
import { CategoryPanel } from "./panels/category/category";
import { EventPanel } from "./panels/events/events";
import "@vkontakte/vkui/dist/vkui.css";

export const App = () => {
    const {
        view: activeView = EViews.HOME,
        panel: activePanel = EPanels.HOME,
    } = useActiveVkuiLocation();

    return (
        <SplitLayout>
            <SplitCol>
                <Epic activeStory={activeView}>
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
                    </View>
                    <View id={EViews.EVENTS} activePanel={activePanel}>
                        <EventPanel id={EPanels.EVENTS} />
                    </View>
                    <View id={EViews.CATEGORY} activePanel={activePanel}>
                        <CategoryPanel id={EPanels.CATEGORY} />
                    </View>
                </Epic>
            </SplitCol>
        </SplitLayout>
    );
};
