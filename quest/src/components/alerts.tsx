import {Alert} from "@vkontakte/vkui";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

interface IAlertProps {
    header: string;
    text: string;
}

export const InfoAlert = (props: IAlertProps) => {
    const router = useRouteNavigator();

    return (
        <Alert
            actions={[
                {
                    title: 'Ok',
                    mode: 'default',
                },
            ]}
            header={props.header}
            text={props.text}
            onClose={() => router.hidePopout()}
        />
    )
}

//router.showPopout(<InfoAlerts header="", text=""/>)