import { useState } from "react";
import styles from "./QuizPanel.module.css";

import {
    Button,
    FormItem,
    Panel,
    PanelHeader,
    PanelProps,
    Radio,
    RadioGroup,
} from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const QuizPanel = (props: PanelProps) => {
    const { ...rest } = props;

    const [role, setRole] = useState<"student" | "employee" | null>(null);

    const onRoleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setRole(e.target.value as "student" | "employee");
    };

    const router = useRouteNavigator();

    return (
        <Panel className={styles["QuizPanel"]} {...rest}>
            <PanelHeader delimiter="none" />
            <div className={styles["PanelContent"]}>
                <div className={styles["RolePicker"]}>
                    <FormItem top="Выберите свой статус:">
                        <RadioGroup>
                            <Radio
                                name="role"
                                value="employee"
                                checked={role === "employee"}
                                onChange={onRoleChange}
                            >
                                Сотрудник
                            </Radio>
                            <Radio
                                name="role"
                                value="student"
                                checked={role === "student"}
                                onChange={onRoleChange}
                            >
                                Студент
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                    <div className={styles["Controls"]}>
                        <Button
                            stretched
                            size="l"
                            disabled={!role}
                            onClick={() => router.push(`/quiz/form/${role}`)}
                        >
                            Продолжить
                        </Button>
                    </div>
                </div>
            </div>
        </Panel>
    );
};
