import bridge from "@vkontakte/vk-bridge";
import { useProfileContext } from "src/contexts/profileContext";
import { getUser } from "src/api/user/getUser";

export const useProfile = () => {
    const { profile, setProfile } = useProfileContext();

    const initProfile = async () => {
        if (profile) {
            return;
        }

        const userInfo = await bridge.send("VKWebAppGetUserInfo");

        console.log(userInfo.id);

        // const fetchedUser = await getUser(userInfo.id);

        // console.log(fetchedUser);
    };

    return { initProfile };
};
