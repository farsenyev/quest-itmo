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
// import { ProfilePanel } from "./panels/profileOld/profileOld";
import { QuestsPanel } from "./panels/quests/quests";
import { CategoryPanel } from "./panels/category/category";
import { EventsPanel } from "./panels/events/events";
import { AppTabBar } from "./components/tabbar";
import { AppModalRoot } from "./components/appModalRoot";
import { EventPanel } from "./panels/event/event";
import { useProfile } from "./hooks/useProfile";
import { useEffect } from "react";
// import bridge from "@vkontakte/vk-bridge";
import { QuestPanel } from "./panels/quest/quest";
import "./App.css";
import { usePlatform } from "./hooks/usePlatform";
import { ProfilePanel } from "./panels/profile/profile";

export const App = () => {
    const { initProfile } = useProfile();
    const {
        view: activeView = EViews.QUESTS,
        panel: activePanel = EPanels.QUESTS,
    } = useActiveVkuiLocation();
    const routerPopout = usePopout();

    usePlatform();

    useEffect(() => {
        initProfile();
        //     bridge
        //         .send("VKWebAppShowSlidesSheet", {
        //             slides: [
        //                 {
        //                     media: {
        //                         blob: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEgCAYAAADCPMtRAADulklEQVR4nOydZ5gc1ZWw33OrqsNkjTTKEigjARJJ5GjARAewF+NsI3M2eWZ2eSFJL2kJuSaAeOhykhSRsAMIQiJSAEmAAuAEmEFeASnSYFYub3ze9ldl12fc1yz7e7sT9u1jZlZmXmX1Z9z9+b",
        //                         type: "image",
        //                     },
        //                     title: "Погружайся в культуру ITMO: будь смелым, будь ITMO!",
        //                     subtitle:
        //                         "Познавай ценности ITMO, открывай ключевые отделы и их функции, ставь цели и достигай их с командой ITMO",
        //                 },
        //                 {
        //                     media: {
        //                         blob: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEgCAYAAADCPMtRAADulklEQVR4nOydZ5gc1ZWw33OrqsNkjTTKEigjARJJ5GjARAewF+NsI3M2eWZ2eSFJL2kJuSaAeOhykhSRsAMIQiJSAEmAAuAEmEFeASnSYFYub3ze9ldl12fc1yz7e7sT9u1jZlZmXmX1Z9z9+bfXB7GDTfTEUrVq0qXv379uwmr7+hp+wsbGR5mc5n8n4uKgpbjJxps1mPSMbZmh4/rMOnS5VWVkpPT09is9kJpVKhVpDRRItaWVJrD09OdC0vxKxcWFRFMZ9Gy6UZk0ek0fmD/zS+...",
        //                         type: "image",
        //                     },
        //                     title: "Погружайся в культуру ITMO: будь смелым, будь ITMO!",
        //                     subtitle:
        //                         "Познавай ценности ITMO, открывай ключевые отделы и их функции, ставь цели и достигай их с командой ITMO",
        //                 },
        //             ],
        //         })
        //         .then((data) => {
        //             if (data.result) {
        //                 // Слайды показаны
        //             }
        //         })
        //         .catch((error) => {
        //             // Ошибка
        //             console.log(error);
        //         });
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
                        <QuestsPanel id={EPanels.QUESTS} />
                        <QuestPanel id={EPanels.QUEST} />
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
