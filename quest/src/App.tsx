import {
    SplitLayout,
    SplitCol,
    View,
    useAdaptivityConditionalRender,
} from "@vkontakte/vkui";
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
import { AppTabBar } from "./components/tabbar";
import { AppModalRoot } from "./components/appModalRoot";
import { SpecialEventPanel } from "./panels/specialEvent/SpecialEventPanel";
import { useProfile } from "./hooks/useProfile";
import { useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";

export const App = () => {
    const { initProfile } = useProfile();
    const {
        view: activeView = EViews.HOME,
        panel: activePanel = EPanels.HOME,
    } = useActiveVkuiLocation();

    useEffect(() => {
        initProfile();
        bridge.send('VKWebAppShowSlidesSheet', {
            slides: [
                {
                    media: {
                        blob: 'data:image/jpeg;base64,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',
                        type: 'image'
                    },
                    title: 'Погружайся в культуру ITMO: будь смелым, будь ITMO!',
                    subtitle: 'Познавай ценности ITMO, открывай ключевые отделы и их функции, ставь цели и достигай их с командой ITMO'
                }
            ]
        })
            .then((data) => {
                if (data.result) {
                    // Слайды показаны
                }
            })
            .catch((error) => {
                // Ошибка
                console.log(error);
            });
    }, []);

    return (
        <SplitLayout modal={<AppModalRoot />}>
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
                    </View>
                    <View id={EViews.EVENTS} activePanel={activePanel}>
                        <EventPanel id={EPanels.EVENTS} />
                    </View>
                    <View id={EViews.CATEGORY} activePanel={activePanel}>
                        <CategoryPanel id={EPanels.CATEGORY} />
                    </View>
                    <View id={EViews.EVENT_ID} activePanel={activePanel}>
                        <SpecialEventPanel id={EPanels.EVENT_ID} />
                    </View>
                </Epic>
            </SplitCol>
        </SplitLayout>
    );
};
