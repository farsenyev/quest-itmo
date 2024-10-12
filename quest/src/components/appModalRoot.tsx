import {
    ModalPage,
    ModalPageHeader,
    ModalRoot,
    platform,
    FormItem,
    FormLayoutGroup,
    Calendar,
    Button,
    Div,
    Input,
} from "@vkontakte/vkui";
import { EModals } from "../consts/modals/modals";
import {
    useActiveVkuiLocation,
    useRouteNavigator,
} from "@vkontakte/vk-mini-apps-router";
import { useState } from "react";
import { CreateUrlForEvent } from "../utils/createUrlForEvent";
import { sendEventInfoToDB } from "../utils/sendEventInfoToDB";
import { useEventContext } from "../contexts/eventContext";
import { TEvent } from "../types/event";

export const AppModalRoot = () => {
    const { modal: activeModal } = useActiveVkuiLocation();
    const router = useRouteNavigator();
    const [startDateValue, setStartDateValue] = useState(() => new Date());
    const [endDateValue, setEndDateValue] = useState(() => new Date());
    const [eventName, setEventName] = useState("");
    const [eventDescr, setEventDescrName] = useState("");
    const [eventImgSrc, setImgSrc] = useState("");
    const [enableTime, setEnableTime] = useState(true);
    const [disablePast, setDisablePast] = useState(true);
    const [disableFuture, setDisableFuture] = useState(false);
    const [disablePickers, setDisablePickers] = useState(false);
    const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
    const [size, setSize] = useState("m");
    const [listenDayChangesForUpdate, setListenDayChangesForUpdate] =
        useState(true);
    const [urlForQR, setUrlForQR] = useState("");
    const { events, setEvents } = useEventContext();

    const handleInputNameChange = (e) => {
        setEventName(e.target.value);
    };

    const handleInputDescrChange = (e) => {
        setEventDescrName(e.target.value);
    };

    const handleInputSrcChange = (e) => {
        setImgSrc(e.target.value);
    };

    const submitEventForm = () => {
        const url = CreateUrlForEvent(startDateValue, endDateValue, eventName);
        setUrlForQR(url);
        sendEventInfoToDB(
            startDateValue,
            endDateValue,
            eventName,
            eventDescr,
            url,
        );
        const eventInfo: TEvent = {
            id: 10000,
            endDate: endDateValue,
            startDate: startDateValue,
            authorId: 10000,
            title: eventName,
            description: eventDescr,
            url: url,
        };
        if (events) setEvents([...events, eventInfo]);
    };

    const modalBack = () => {
        router.hideModal();
    };

    return (
        <ModalRoot activeModal={activeModal}>
            <ModalPage
                id={EModals.CREATE_EVENT}
                onClose={modalBack}
                settlingHeight={100}
                hideCloseButton={platform === "ios"}
                header={<ModalPageHeader>Создать событие</ModalPageHeader>}
            >
                <FormLayoutGroup className={"modal__container"}>
                    <FormItem>
                        <Input
                            id="event-name"
                            type="text"
                            value={eventName}
                            placeholder={"Название события"}
                            onChange={(e) => handleInputNameChange(e)}
                        />
                    </FormItem>
                    <FormItem>
                        <Input
                            id="event-descr"
                            type="text"
                            value={eventDescr}
                            placeholder={"Описание события"}
                            onChange={(e) => handleInputDescrChange(e)}
                        />
                    </FormItem>
                    <FormItem>
                        <Div>Дата начала:</Div>
                        <Calendar
                            value={startDateValue}
                            onChange={setStartDateValue}
                            enableTime={enableTime}
                            disablePast={disablePast}
                            disableFuture={disableFuture}
                            disablePickers={disablePickers}
                            showNeighboringMonth={showNeighboringMonth}
                            size={size}
                            listenDayChangesForUpdate={
                                listenDayChangesForUpdate
                            }
                        />
                    </FormItem>
                    <FormItem>
                        <Div>Дата конца:</Div>
                        <Calendar
                            value={endDateValue}
                            onChange={setEndDateValue}
                            enableTime={enableTime}
                            disablePast={disablePast}
                            disableFuture={disableFuture}
                            disablePickers={disablePickers}
                            showNeighboringMonth={showNeighboringMonth}
                            size={size}
                            listenDayChangesForUpdate={
                                listenDayChangesForUpdate
                            }
                        />
                    </FormItem>
                    <FormItem>
                        <Input
                            id="event-descr"
                            type="text"
                            value={eventImgSrc}
                            placeholder={"Вставьте url картинки сюда"}
                            onChange={(e) => handleInputSrcChange(e)}
                        />
                    </FormItem>
                    <Button
                        onClick={submitEventForm}
                        style={{ width: "95%", alignSelf: "center" }}
                    >
                        Создать
                    </Button>
                </FormLayoutGroup>
            </ModalPage>
        </ModalRoot>
    );
};
