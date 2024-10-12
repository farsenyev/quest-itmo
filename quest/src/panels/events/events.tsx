import {Panel, PanelHeader, PanelProps, ToolButton, Group, CellButton, ModalRootContext} from "@vkontakte/vkui";
import { EventList } from "./components/EventList/EventList";
import { TEvent } from "src/types/event";
import {Icon24Qr, Icon28AddOutline} from '@vkontakte/icons'
import {qrScanner} from "../../utils/qrScanner";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import {EModals} from "../../consts/modals/modals";


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
    id: 111
}

export const EventPanel = (props: PanelProps) => {
    const { ...rest } = props;
    const router = useRouteNavigator()

    const createEvent = () => {
        router.showModal(EModals.CREATE_EVENT)
    }

    return (
        <Panel {...rest} disableBackground>
            <PanelHeader fixed>Events</PanelHeader>
            <Group>
                <ToolButton
                    className={"qr-scan-button"}
                    IconCompact={Icon24Qr}
                    IconRegular={Icon24Qr}
                    onClick={() => qrScanner(user)}
                >QR скан</ToolButton>
                <CellButton onClick={() => createEvent()} before={<Icon28AddOutline />}>
                    Создать событие
                </CellButton>
            </Group>
            <EventList events={events} />
        </Panel>
    );
};
