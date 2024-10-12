import {Div, Header, Accordion} from "@vkontakte/vkui";
import {QRCodeComponent} from "../../components/qrGenerator";

export const SpecialEventPanel = () => {
    const dataJSON = localStorage.getItem('event')
    const data = JSON.parse(dataJSON)
    const eventDate = data.date

    return (
        <>
        {data ?
            <Div>
                <Header>{data.title}</Header>
                <Div>Дата: {eventDate}</Div>
                <Accordion>
                    <Accordion.Summary iconPosition="before">Описание</Accordion.Summary>
                    <Accordion.Content>
                        <Div>
                            {data.description}
                        </Div>
                    </Accordion.Content>
                </Accordion>
                <QRCodeComponent props={data.url}/>
            </Div> : <Div>Loading...</Div>
        }
        </>
    )
}