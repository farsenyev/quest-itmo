import bridge from "@vkontakte/vk-bridge";
import { useProfileContext } from "src/contexts/profileContext";

export const useProfile = () => {
    const { profile, setProfile } = useProfileContext();

    const initProfile = async () => {
        if (profile) {
            return;
        }

        const userInfo = await bridge.send("VKWebAppGetUserInfo");

        setProfile({
            ...userInfo,
            tokenAmount: 10,
            role: "EMPLOYEE",
            verified: true,
        });
    };

    return { initProfile };
};
