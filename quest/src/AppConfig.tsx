import vkBridge, {
    parseURLSearchParamsForGetLaunchParams,
} from "@vkontakte/vk-bridge";
import {
    useAdaptivity,
    useAppearance,
    useInsets,
} from "@vkontakte/vk-bridge-react";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
import { ContextProvider } from "./contexts/contextProvider";

import { transformVKBridgeAdaptivity } from "./utils/transformVKBridgeAdaptivity";

import { App } from "./App";
import { router } from "./router";

export const AppConfig = () => {
    const vkBridgeAppearance = useAppearance() || undefined;
    const vkBridgeInsets = useInsets() || undefined;
    const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
    const { vk_platform } = parseURLSearchParamsForGetLaunchParams(
        window.location.search,
    );

    return (
        <ConfigProvider
            appearance={vkBridgeAppearance}
            platform={vk_platform === "desktop_web" ? "vkcom" : undefined}
            isWebView={vkBridge.isWebView()}
            hasCustomPanelHeaderAfter={true}
        >
            <AdaptivityProvider {...adaptivity}>
                <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
                    <RouterProvider router={router}>
                        <ContextProvider>
                            <App />
                        </ContextProvider>
                    </RouterProvider>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};
