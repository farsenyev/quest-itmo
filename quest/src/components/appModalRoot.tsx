import {ModalPage, ModalPageHeader, ModalRoot, platform, FormItem, FormLayoutGroup, Calendar, Button } from "@vkontakte/vkui";
import {EModals} from "../consts/modals/modals";
import {useActiveVkuiLocation, useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import {useState} from "react";
import {CreateUrlForEvent} from "../utils/createUrlForEvent";
import {QRCodeComponent} from "./qrGenerator";
import {sendEventInfoToDB} from "../utils/sendEventInfoToDB";

export const AppModalRoot = () => {
    const {modal: activeModal} = useActiveVkuiLocation()
    const router = useRouteNavigator()
    const [dateValue, setDateValue] = useState(() => new Date());
    const [eventName, setEventName] = useState('');
    const [eventDescr, setEventDescrName] = useState('Lorem ipsum')
    const [enableTime, setEnableTime] = useState(true);
    const [disablePast, setDisablePast] = useState(true);
    const [disableFuture, setDisableFuture] = useState(false);
    const [disablePickers, setDisablePickers] = useState(false);
    const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
    const [size, setSize] = useState('m');
    const [listenDayChangesForUpdate, setListenDayChangesForUpdate] = useState(true);
    const [urlForQR, setUrlForQR] = useState('')

    const handleInputNameChange = (e) => {
        setEventName(e.target.value)
    }

    const handleInputDescrChange = (e) => {
        setEventDescrName(e.target.value)
    }

    const submitEventForm = () => {
        const url = CreateUrlForEvent(dateValue, eventName)
        setUrlForQR(url)
        sendEventInfoToDB(dateValue, eventName, eventDescr, url)
    }

    const modalBack = () => {
        router.hideModal()
    }

    return (
        <ModalRoot activeModal={activeModal}>
            <ModalPage
                id={EModals.CREATE_EVENT}
                onClose={modalBack}
                settlingHeight={100}
                hideCloseButton={platform === 'ios'}
                header={
                    <ModalPageHeader>
                        Создать событие
                    </ModalPageHeader>}
            >
                <FormLayoutGroup>
                    <FormItem>
                        <input type="text" aria-label={'name'} placeholder="Название события" value={eventName} onChange={(e) => handleInputNameChange(e)}/>
                    </FormItem>
                    <FormItem>
                        <input type="text" aria-label={'name'} placeholder="Описание события" value={eventDescr} onChange={(e) => handleInputDescrChange(e)}/>
                    </FormItem>
                    <FormItem>
                            <Calendar
                                value={dateValue}
                                onChange={setDateValue}
                                enableTime={enableTime}
                                disablePast={disablePast}
                                disableFuture={disableFuture}
                                disablePickers={disablePickers}
                                showNeighboringMonth={showNeighboringMonth}
                                size={size}
                                listenDayChangesForUpdate={listenDayChangesForUpdate}
                            />
                    </FormItem>
                    <Button onClick={submitEventForm}>Создать</Button>
                </FormLayoutGroup>
                {urlForQR && <QRCodeComponent props={urlForQR}/>}
            </ModalPage>
        </ModalRoot>
    )
}