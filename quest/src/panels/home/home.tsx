import { Panel, PanelProps } from '@vkontakte/vkui';
import { Button, ButtonGroup } from '@vkontakte/vkui';
import { FormLayoutGroup, FormItem, Input, Select } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import styles from './Home.module.css';
import { useState } from 'react';

const faculty = [
  { value: '1', label: 'Безопасность информационных технологий' },
  { value: '2', label: 'Биотехнологии' },
  { value: '3', label: 'Цифровые трансформации' },
  { value: '4', label: 'Программная инженерия и компьютерная техника' },
  { value: '5', label: 'Физический факультет' },
  { value: '6', label: 'Информационные технологии и программирование' },
  { value: '7', label: 'Система управления и робототехника' },
  { value: '8', label: 'Экотехнологии' },
  { value: '9', label: 'Физико-технический мегафакультет' },
  { value: '10', label: 'Факультет инфокоммуникационных технологий' },
];

const roles = [
  { value: '1', label: 'Преподавание' },
  { value: '2', label: 'Сервисный центр' },
  { value: '3', label: 'Менджмент' },
  { value: '4', label: 'Студенческий офис' },
  { value: '5', label: 'Сотрудники кадров' },
];

export const HomePanel = (props: PanelProps) => {
  const [role, setRole] = useState('')
  const { ...rest } = props;

  return (
    <Panel {...rest} disableBackground>
      <h1>Добро пожаловать в ITMO!</h1>
      <ButtonGroup mode="vertical" gap="m" className={styles['choose-btn']} style={{ minWidth: 328 }}>
        <Button onClick={() => setRole('student')} size="l" appearance="accent" stretched>
          Студент
        </Button>
        <Button onClick={() => setRole('employee')} size="l" appearance="accent" stretched>
          Сотрудник
        </Button>
      </ButtonGroup>


      {role && role === "student" && <FormLayoutGroup>
        <FormItem htmlFor="name" top="Номер ИСУ">
          <Input id="number" />
        </FormItem>
        <FormItem htmlFor="lastName" top="Группа">
          <Input id="group" />
        </FormItem>
        <FormItem
          top="Факультет"
          htmlFor="select-faculty-id"
          style={{ flexBasis: '200px', flexGrow: 0 }}
        >
          <Select
            id="select-faculty-id"
            placeholder="Не задан"
            options={faculty}
          />
        </FormItem>
      </FormLayoutGroup>}

      {role && role === "employee" && <FormLayoutGroup>
        <FormItem htmlFor="name" top="Номер ИСУ">
          <Input id="number" />
        </FormItem>
        <FormItem
          top="Область работы"
          htmlFor="select-faculty-id"
          style={{ flexBasis: '200px', flexGrow: 0 }}
        >
          <Select
            id="select-faculty-id"
            placeholder="Не задан"
            options={roles}
          />
        </FormItem>
      </FormLayoutGroup>}
    </Panel>
  );
};
