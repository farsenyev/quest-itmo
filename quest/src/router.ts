import { createBrowserRouter } from "@vkontakte/vk-mini-apps-router";
import { EPanels } from "./consts/panels/panels";
import { EViews } from "./consts/views/veiws";

export const router = createBrowserRouter([
    {
        path: "/",
        panel: EPanels.HOME,
        view: EViews.HOME,
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
        path: "/events",
        panel: EPanels.EVENTS,
        view: EViews.EVENTS,
    },
]);
