import styles from "./OnboardingPanel.module.css";

import { Panel, PanelHeader, PanelProps } from "@vkontakte/vkui";
import { useEffect, useState } from "react";
import { Title } from "@vkontakte/vkui";
import { Button } from "@vkontakte/vkui";
import { Paragraph } from "@vkontakte/vkui";
import { FaUniversity } from "react-icons/fa";
import { PiUsersFour } from "react-icons/pi";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { useProfileContext } from "src/contexts/profileContext";

export const OnboardingPanel = (props: PanelProps) => {
    const { ...rest } = props;

    const [step, setStep] = useState(0);

    const router = useRouteNavigator();

    // const { profile } = useProfileContext();

    // if (profile) {
    //     router.replace("/quests");
    // }

    const steps = [
        {
            Icon: <FaUniversity size={96} className={styles["Icon"]} />,
            title: "Погрузись в мир ИТМО вместе с нашим приложением",
            subtitle:
                "Знакомься с культурой университета, находи новые связи и становись частью ITMO Family.",
            nextButton: (
                <Button size="m" stretched onClick={() => setStep(1)}>
                    Продолжить
                </Button>
            ),
            skipButton: (
                <Button
                    mode="tertiary"
                    size="m"
                    stretched
                    onClick={() => router.replace("/quiz")}
                >
                    Пропустить
                </Button>
            ),
        },
        {
            Icon: <PiUsersFour size={96} className={styles["Icon"]} />,
            title: "Расширяй интересы и круг общения",
            subtitle:
                "Посещай множество интересных мероприятий и организовывай свои собственные.",
            nextButton: (
                <Button size="m" stretched onClick={() => setStep(2)}>
                    Продолжить
                </Button>
            ),
            skipButton: (
                <Button
                    mode="tertiary"
                    size="m"
                    stretched
                    onClick={() => router.replace("/quiz")}
                >
                    Пропустить
                </Button>
            ),
        },
        {
            Icon: (
                <MdOutlineGeneratingTokens
                    size={96}
                    className={styles["Icon"]}
                />
            ),
            title: "Получи заслуженную награду",
            subtitle:
                "Получай токены за различные активности в приложении и обменивай их на награды.",
            nextButton: (
                <Button
                    size="m"
                    stretched
                    onClick={() => router.replace("/quiz")}
                >
                    Хорошо
                </Button>
            ),
        },
    ];

    const { Icon, nextButton, skipButton, subtitle, title } = steps[step];

    return (
        <Panel
            {...rest}
            mode="plain"
            className={styles["Panel"]}
            disableBackground
        >
            <PanelHeader fixed delimiter="none" />
            <div className={styles["StepContainer"]}>
                <div className={styles["Step"]}>
                    <div className={styles["Content"]}>
                        {Icon}
                        <div className={styles["TextContent"]}>
                            <Title level="2">{title}</Title>
                            <Paragraph className={styles["Subtitle"]}>
                                {subtitle}
                            </Paragraph>
                        </div>
                    </div>

                    <div className={styles["Controls"]}>
                        {nextButton}
                        {skipButton}
                    </div>
                </div>
            </div>
        </Panel>
    );
};
