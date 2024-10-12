import styles from "./events.module.css";

import {
    Panel,
    PanelHeader,
    PanelProps,
    ToolButton,
    ModalRootContext,
    Button,
} from "@vkontakte/vkui";
import { EventList } from "./components/EventList/EventList";
import { TEvent } from "src/types/event";
import { Icon24Qr, Icon28AddOutline } from "@vkontakte/icons";
import { qrScanner } from "../../utils/qrScanner";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { EModals } from "../../consts/modals/modals";
import { usePlatformContext } from "src/contexts/platformContext";
// import { QrAlert } from "../../components/alerts";

const events: TEvent[] = [
    {
        authorId: 1,
        date: new Date(),
        description: "text",
        id: 1,
        title: "Event #1",
        imgSrc: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        authorId: 2,
        date: new Date(),
        description: "text",
        id: 2,
        title: "Event #2",
        imgSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        authorId: 3,
        date: new Date(),
        description: "text",
        id: 3,
        title: "Event #3",
        imgSrc: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const user = {
    id: 111,
};

export const EventsPanel = (props: PanelProps) => {
    const { ...rest } = props;
    const router = useRouteNavigator();

    const {} = usePlatformContext();

    const handleQR = () => {
        const data = qrScanner(user);
        if (data.code === "200")
            router.showPopout(
                <InfoAlert
                    header="Поздрваляем!"
                    text="Qr успешно отсканирован. Держи 10 токенов"
                />,
            );
    };

    const createEvent = () => {
        router.showModal(EModals.CREATE_EVENT);
    };

    return (
        <Panel {...rest} disableBackground>
            <PanelHeader fixed>Events</PanelHeader>
            <div className={styles["Controls"]}>
                <Button
                    before={<Icon28AddOutline />}
                    // className={styles["AddEventButton"]}
                >
                    Создать
                </Button>
                <div>
                    <ToolButton
                        IconCompact={Icon24Qr}
                        IconRegular={Icon24Qr}
                        // className={styles["QRButton"]}
                    />
                </div>
            </div>
            {/* <Flex direction="row">
                <ToolButton
                    // className={"qr-scan-button"}
                    IconCompact={Icon24Qr}
                    IconRegular={Icon24Qr}
                    onClick={() => handleQR()}
                ></ToolButton>
                <CellButton
                    onClick={() => createEvent()}
                    before={<Icon28AddOutline />}
                >
                    Создать событие
                </CellButton>
            </Flex> */}
            <EventList events={events} />
        </Panel>
    );
};
