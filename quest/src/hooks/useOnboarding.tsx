import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

const useOnboarding = () => {
    const router = useRouteNavigator();

    router.replace("/onboarding");
};
