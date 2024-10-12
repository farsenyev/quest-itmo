import { createContext, useContext, useState } from "react";
import { TProfile } from "src/types/profile";

type TProfileContext = {
    profile: TProfile | null;
    setProfile: React.Dispatch<React.SetStateAction<TProfile | null>>;
};

const ProfileContext = createContext<TProfileContext | null>(null);

export const ProfileContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [profile, setProfile] = useState<TProfile | null>(null);

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfileContext = () => {
    const profileContext = useContext(ProfileContext);

    if (!profileContext) {
        throw new Error(
            "ProfileContext must be used within ProfileContextProvider",
        );
    }

    return profileContext;
};
