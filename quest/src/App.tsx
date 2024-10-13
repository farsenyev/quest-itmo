import { SplitLayout, SplitCol, View } from "@vkontakte/vkui";
import { Epic } from "@vkontakte/vkui";
import { useEffect } from "react";
import {
    useActiveVkuiLocation,
    usePopout,
} from "@vkontakte/vk-mini-apps-router";
import { EPanels } from "./consts/panels/panels";
import { EViews } from "./consts/views/veiws";
import { QuizPanel } from "./panels/quiz/QuizPanel";
import { CommunityPanel } from "./panels/community/community";
import { QuestsPanel } from "./panels/quests/quests";
import { EventsPanel } from "./panels/events/events";
import { AppTabBar } from "./components/tabbar";
import { AppModalRoot } from "./components/appModalRoot";
import { EventPanel } from "./panels/event/event";
import { useProfile } from "./hooks/useProfile";
import { QuestPanel } from "./panels/quest/quest";
import { usePlatform } from "./hooks/usePlatform";
import { ProfilePanel } from "./panels/profile/profile";
import { DevelopPanel } from "./panels/develop/develop";
import { OnboardingPanel } from "./panels/onboarding/OnboardingPanel";
import { QuizFormPanel } from "./panels/quizForm/QuizFormPanel";
import { HomePanel } from "./panels/home/home";

export const App = () => {
    const { initProfile } = useProfile();
    const {
        view: activeView = EViews.ONBOARDING,
        panel: activePanel = EPanels.HOME,
    } = useActiveVkuiLocation();
    const routerPopout = usePopout();

    usePlatform();

    useEffect(() => {
        initProfile();
    }, []);

    return (
        <SplitLayout modal={<AppModalRoot />} popout={routerPopout}>
            <SplitCol>
                <Epic
                    activeStory={activeView}
                    tabbar={
                        <AppTabBar
                            activeStory={activeView as EViews}
                            hidden={activeView === EViews.ONBOARDING}
                        />
                    }
                >
                    <View id={EViews.ONBOARDING} activePanel={activePanel}>
                        <QuizPanel id={EPanels.QUIZ} />
                        <QuizFormPanel id={EPanels.QUIZ_FORM} />
                        <OnboardingPanel id={EPanels.ONBOARDING} />
                        <HomePanel id={EPanels.HOME} />
                    </View>
                    <View id={EViews.COMMUNITY} activePanel={activePanel}>
                        <CommunityPanel id={EPanels.COMMUNITY} />
                    </View>
                    <View id={EViews.PROFILE} activePanel={activePanel}>
                        <ProfilePanel id={EPanels.PROFILE} />
                    </View>
                    <View id={EViews.QUESTS} activePanel={activePanel}>
                        <QuestsPanel id={EPanels.QUESTS} />
                        <QuestPanel id={EPanels.QUEST} />
                    </View>
                    <View id={EViews.EVENTS} activePanel={activePanel}>
                        <EventsPanel id={EPanels.EVENTS} />
                        <EventPanel id={EPanels.EVENT} />
                        <DevelopPanel id={EPanels.DEVELOP} />
                    </View>
                </Epic>
            </SplitCol>
        </SplitLayout>
    );
};
