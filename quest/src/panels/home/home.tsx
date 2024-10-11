import { Panel, PanelProps } from '@vkontakte/vkui';
import { Button, ButtonGroup } from '@vkontakte/vkui';
import styles from './Home.module.css';

export const HomePanel = (props: PanelProps) => {
    const { ...rest } = props;

    return (
        <Panel {...rest} disableBackground>
            <h1>Добро пожаловать в ITMO!</h1>
            <ButtonGroup mode="vertical" gap="m" className={styles['choose-btn']} style={{ minWidth: 328 }}>
                <Button onClick={() => {}} size="l" appearance="accent" stretched>
                    Студент
                </Button>
                <Button onClick={() => {}} size="l" appearance="accent" stretched>
                    Преподаватель
                </Button>
            </ButtonGroup>
        </Panel>
    );
};
