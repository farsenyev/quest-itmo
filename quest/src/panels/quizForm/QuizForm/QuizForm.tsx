import styles from "./QuizForm.module.css";

import {
    FormItem,
    Button,
    FormLayoutGroup,
    Input,
    Select,
    Title,
} from "@vkontakte/vkui";

const faculty = [
    { value: "1", label: "Безопасность информационных технологий" },
    { value: "2", label: "Биотехнологии" },
    { value: "3", label: "Цифровые трансформации" },
    { value: "4", label: "Программная инженерия и компьютерная техника" },
    { value: "5", label: "Физический факультет" },
    { value: "6", label: "Информационные технологии и программирование" },
    { value: "7", label: "Система управления и робототехника" },
    { value: "8", label: "Экотехнологии" },
    { value: "9", label: "Физико-технический мегафакультет" },
    { value: "10", label: "Факультет инфокоммуникационных технологий" },
];

const roles = [
    { value: "1", label: "Преподавание" },
    { value: "2", label: "Сервисный центр" },
    { value: "3", label: "Менеджмент" },
    { value: "4", label: "Студенческий офис" },
    { value: "5", label: "Кадры" },
    { value: "6", label: "Разработка ПО" },
    { value: "7", label: "Техническое обслуживание" },
];

type BaseFormProps = React.ComponentPropsWithoutRef<"form">;

interface QuizFormProps extends BaseFormProps {
    role: string | undefined;
}

export const QuizForm = (props: QuizFormProps) => {
    const { role, ...rest } = props;

    const onSave: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    };

    return (
        <form {...rest} className={styles["QuizForm"]} onSubmit={onSave}>
            {role && role === "student" && (
                <FormLayoutGroup className={styles["QuizContent"]}>
                    <div className={styles["Title"]}>
                        <Title level="2">Студент</Title>
                    </div>
                    <FormItem htmlFor="name" top="Номер ИСУ">
                        <Input id="number" required />
                    </FormItem>
                    <FormItem top="Факультет" htmlFor="select-faculty-id">
                        <Select
                            id="select-faculty-id"
                            placeholder="Факультет"
                            options={faculty}
                            multiline={true}
                            required
                        />
                    </FormItem>
                    <FormItem htmlFor="lastName" top="Группа">
                        <Input id="group" required />
                    </FormItem>
                </FormLayoutGroup>
            )}
            {role && role === "employee" && (
                <FormLayoutGroup className={styles["QuizContent"]}>
                    <div className={styles["Title"]}>
                        <Title level="2">Сотрудник</Title>
                    </div>
                    <FormItem htmlFor="name" top="Номер ИСУ">
                        <Input id="number" required />
                    </FormItem>

                    <FormItem
                        top="Сфера деятельности"
                        htmlFor="select-faculty-id"
                    >
                        <Select
                            id="select-faculty-id"
                            placeholder="Сфера деятельности"
                            options={roles}
                        />
                    </FormItem>
                </FormLayoutGroup>
            )}
            <div className={styles["Controls"]}>
                <Button stretched size="l" type="submit">
                    Сохранить
                </Button>
            </div>
        </form>
    );
};
