import { SimpleGrid, SimpleGridProps } from "@vkontakte/vkui";
import { usePlatformContext } from "src/contexts/platformContext";

export const CustomGrid = (props: SimpleGridProps) => {
    const { children, ...rest } = props;

    const { platform } = usePlatformContext();

    return (
        <SimpleGrid columns={platform === "mobile" ? 1 : 2} {...rest}>
            {children}
        </SimpleGrid>
    );
};
