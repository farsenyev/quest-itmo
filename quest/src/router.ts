import { createBrowserRouter } from "@vkontakte/vk-mini-apps-router";
import { EPanels } from "./consts/panels/panels";
import { EViews } from "./consts/views/veiws";

export const router = createBrowserRouter([
    {
        path: "/",
        panel: EPanels.ONBOARDING,
        view: EViews.ONBOARDING,
    },
    {
        path: "/quiz",
        panel: EPanels.QUIZ,
        view: EViews.ONBOARDING,
    },
    {
        path: "/community",
        panel: EPanels.COMMUNITY,
        view: EViews.COMMUNITY,
    },
    {
        path: "/profile",
        panel: EPanels.PROFILE,
        view: EViews.PROFILE,
    },
    {
        path: "/quests",
        panel: EPanels.QUESTS,
        view: EViews.QUESTS,
    },
    {
        path: "/quest/:id",
        panel: EPanels.QUEST,
        view: EViews.QUESTS,
    },
    {
        path: "/events",
        panel: EPanels.EVENTS,
        view: EViews.EVENTS,
    },
    {
        path: "/event/:id",
        panel: EPanels.EVENT,
        view: EViews.EVENTS,
    },
    {
        path: "/develop",
        panel: EPanels.DEVELOP,
        view: EViews.EVENTS,
    },
]);
