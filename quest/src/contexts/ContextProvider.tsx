import { ProfileContextProvider } from "./profileContext";
import { PlatformContextProvider } from "./platformContext";
import { EventContextProvider } from "./eventContext";

export const ContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <ProfileContextProvider>
            <PlatformContextProvider>
                <EventContextProvider>{children}</EventContextProvider>
            </PlatformContextProvider>
        </ProfileContextProvider>
    );
};
