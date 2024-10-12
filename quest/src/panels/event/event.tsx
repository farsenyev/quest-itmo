import { Panel, PanelHeader, PanelProps, Button, Accordion, Div, Flex } from "@vkontakte/vkui";
import {useParams, useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import { useEventContext } from "src/contexts/eventContext";
import { QRCodeComponent } from "src/components/qrGenerator";
import {shareInHistory, shareOnWall} from "../../utils/shareUtils";
import {Icon24Share, Icon24StoryReplyOutline, Icon24BrowserBack} from '@vkontakte/icons'

export const EventPanel = (props: PanelProps) => {
    const params = useParams<"id">();
    const eventId = params?.id;
    const router = useRouteNavigator()

    const { events } = useEventContext();

    const event = eventId
        ? events.find((event) => event.id === +eventId)
        : undefined;

    const { ...rest } = props;

    const shareEventOnWall = async () => {
        const eventInfo = `${event.url}`
        const greetings = `Привет! Приглашаю на свое мероприятие ${event.title}! ${event.description}! Начало ${event.startDate.toLocaleString().slice(0, -3)}`
        await shareOnWall(greetings, eventInfo)
    }

    const shareEventInHistory = async () => {
        await shareInHistory()
    }

    return (
        <Panel {...rest} mode="plain">
            <PanelHeader fixed>{event?.title}</PanelHeader>
            {event && event.url ? (
                <Flex direction={'column'} align={'center'} gap={10} style={{marginTop: '5px'}}>
                    <QRCodeComponent url={event.url} />
                    <Div>
                        {`${event.startDate.toLocaleString().slice(0, -3)} - ${event.endDate.toLocaleString().slice(0, -3)}`}
                    </Div>
                    <Div>
                        <Accordion
                            key={event.id}
                            expanded={true}
                        >
                            <Accordion.Summary>Описание</Accordion.Summary>
                            <Accordion.Content>
                                <Div>{event.description}</Div>
                            </Accordion.Content>
                        </Accordion>
                    </Div>
                </Flex>) : undefined}
            <Flex direction={'row'} justify={'space-evenly'} align={'center'} gap={10}>
                <Button onClick={shareEventOnWall} after={<Icon24Share/>}/>
                <Button onClick={shareEventInHistory} after={<Icon24StoryReplyOutline/>}/>
            </Flex>
            <Div className={'event_back-button'}>
                <Button onClick={() => router.back()} before={<Icon24BrowserBack/>}> Назад </Button>
            </Div>

        </Panel>
    );
};
