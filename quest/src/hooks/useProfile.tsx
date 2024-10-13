import bridge from "@vkontakte/vk-bridge";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { useProfileContext } from "src/contexts/profileContext";

export const useProfile = () => {
    const { profile, setProfile } = useProfileContext();

    const router = useRouteNavigator();

    const initProfile = async () => {
        try {
            if (profile) {
                router.replace("/quests");
                return;
            }

            const userInfo = await bridge.send("VKWebAppGetUserInfo");

            const response = await fetch(
                `https://43ntp6jp-3000.euw.devtunnels.ms/api/user/${userInfo.id}`,
            );

            const responseJSON = await response.json();

            if (!responseJSON) {
                router.replace("/onboarding");
                return;
            }

            const { data: fetchedUser } = responseJSON;

            setProfile({
                ...userInfo,
                tokenAmount: fetchedUser.tokenAmount,
                role: fetchedUser.role,
                verified: true,
            });
            router.replace("/quests");
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("Unknown error");
            }
        }
    };

    const createProfile = async (role: "STUDENT" | "EMPLOYEE") => {
        try {
            const userInfo = await bridge.send("VKWebAppGetUserInfo");

            const newUser = { vkUserId: userInfo.id, role };

            const response = await fetch(
                `https://43ntp6jp-3000.euw.devtunnels.ms/api/user/new`,
                { method: "POST", body: JSON.stringify(newUser) },
            );

            const responseJSON = await response.json();

            if (!responseJSON) {
                throw new Error("Error while creating user");
            }

            const { data: fetchedUser } = responseJSON;

            setProfile({
                ...userInfo,
                tokenAmount: fetchedUser.tokenAmount,
                role: fetchedUser.role,
                verified: true,
            });

            return fetchedUser;
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("Unknown error");
            }
        }
    };

    return { initProfile, createProfile };
};
