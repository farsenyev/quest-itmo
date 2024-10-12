import { ProfileContextProvider } from "./profileContext";
import { PlatformContextProvider } from "./platformContext";

export const ContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <ProfileContextProvider>
            <PlatformContextProvider>{children}</PlatformContextProvider>
        </ProfileContextProvider>
    );
};
