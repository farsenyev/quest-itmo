import { Panel, PanelHeader, PanelProps } from "@vkontakte/vkui";
// import { QRCodeComponent } from "../../components/qrGenerator";
import { useParams } from "@vkontakte/vk-mini-apps-router";

export const EventPanel = (props: PanelProps) => {
    // const dataJSON = localStorage.getItem("event");
    // const data = JSON.parse(dataJSON);
    // const eventDate = data.date;

    const params = useParams<"id">();
    const eventId = params?.id;

    const { ...rest } = props;

    return (
        <Panel {...rest} mode="plain">
            <PanelHeader fixed>{`Event #${eventId}`}</PanelHeader>
        </Panel>
        // <>
        //     {data ? (
        //         <Div>
        //             <Header>{data.title}</Header>
        //             <Div>Дата: {eventDate}</Div>
        //             <Accordion>
        //                 <Accordion.Summary iconPosition="before">
        //                     Описание
        //                 </Accordion.Summary>
        //                 <Accordion.Content>
        //                     <Div>{data.description}</Div>
        //                 </Accordion.Content>
        //             </Accordion>
        //             <QRCodeComponent props={data.url} />
        //         </Div>
        //     ) : (
        //         <Div>Loading...</Div>
        //     )}
        // </>
    );
};
