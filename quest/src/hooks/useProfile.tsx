import bridge from "@vkontakte/vk-bridge";
import { useProfileContext } from "src/contexts/profileContext";
import { getUser } from "src/api/user/getUser";
import { createNewUser } from "src/api/user/createNewUser";

export const useProfile = () => {
    const { profile, setProfile } = useProfileContext();

    const initProfile = async () => {
        if (profile) {
            return;
        }

        const userInfo = await bridge.send("VKWebAppGetUserInfo");

        const fetchedUser = await getUser(userInfo.id);

        if (fetchedUser === null) {
            const newUser = await createNewUser(userInfo.id);

            const {
                data: { role, verified },
            } = newUser;

            setProfile({ ...userInfo, role, verified });

            return;
        }

        if (fetchedUser?.error) {
            console.log("Error");
            return;
        }

        const {
            data: { role, verified },
        } = fetchedUser;

        setProfile({ ...userInfo, role, verified });
    };

    return { initProfile };
};
