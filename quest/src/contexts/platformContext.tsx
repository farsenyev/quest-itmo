import { createContext, useContext, useState } from "react";

type TPlatformContext = {
    platform: "desktop" | "mobile";
    setPlatform: React.Dispatch<React.SetStateAction<"desktop" | "mobile">>;
};

const PlatformContext = createContext<TPlatformContext | null>(null);

export const PlatformContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [platform, setPlatform] = useState<"desktop" | "mobile">("desktop");

    return (
        <PlatformContext.Provider value={{ platform, setPlatform }}>
            {children}
        </PlatformContext.Provider>
    );
};

export const usePlatformContext = () => {
    const platformContext = useContext(PlatformContext);

    if (!platformContext) {
        throw new Error(
            "PlatformContext must be used within PlatformContextProvider",
        );
    }

    return platformContext;
};
