import bridge from "@vkontakte/vk-bridge";
import { useEffect } from "react";
import { usePlatformContext } from "src/contexts/platformContext";

export const usePlatform = () => {
    const { setPlatform } = usePlatformContext();
    useEffect(() => {
        const loadParams = async () => {
            const { vk_platform } = await bridge.send(
                "VKWebAppGetLaunchParams",
            );

            setPlatform(vk_platform.includes("mobile") ? "mobile" : "desktop");
        };

        loadParams();
    }, []);
};
