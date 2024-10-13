import {Panel, PanelHeader, PanelProps, CardScroll, Group, Card, Tappable, Header, ContentCard, Button } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { TQuest } from "src/types/quest";
import { CustomGrid } from "src/components/CustomGrid/CustomGrid";
import {EcoIcon, FitIcon, FriendlyIcon, HealthyIcon, OpenIcon, ProIcon,} from "./components/icons/icons";
import { Icon24ShoppingCartOutline } from '@vkontakte/icons';

const quests: TQuest[] = [
    {
        id: 1,
        title: "be friendly",
        description: "text",
        color: "#ef85b4",
        Icon: <FriendlyIcon />,
    },
    {
        id: 2,
        title: "be healthy",
        description: "text",
        color: '#e83757',
        Icon: <HealthyIcon />,
    },
    {
        id: 3,
        title: "be fit",
        description: "text",
        color: '#008dcf',
        Icon: <FitIcon />,
    },
    {
        id: 4,
        title: "be eco",
        description: "text",
        color: '#00a255',
        Icon: <EcoIcon />,
    },
    {
        id: 5,
        title: "be open",
        description: "text",
        color: '#f07f55',
        Icon: <OpenIcon/>,
    },
    {
        id: 6,
        title: "be pro",
        description: "text",
        color: '#8373b3',
        Icon: <ProIcon />,
    },

];

const links = [
    {
        name: 'Официальный сайт Университета ИТМО',
        url: 'https://itmo.ru/ru/',
        descr:'Официальный сайт Университета ИТМО содержит полную информацию об университете, структурных подразделениях и контактах.'
    },
    {
        name: 'Международный портал Университета',
        url: 'https://news.itmo.ru/en/',
        descr: 'Международный портал Университета — англоязычный ресурс для абитуриентов, студентови сотрудников, где рассказывается о жизни университета.'
    },
    {
        name: 'ITMO.NEWS',
        url: 'https://news.itmo.ru/ru/',
        descr: 'Новостной портал ITMO.NEWS рассказывает о событиях как внутри университета,так и во внешней среде.'
    },
    {
        name: 'ИСУ',
        url: 'https://news.itmo.ru/ru/', //TODD: LINK TO ИСУ
        descr: 'Информационная система университета (ИСУ) — корпоративный портал, доступный только для сотрудников ИТМО. Регистрация доступна при предоставлении логина и пароля послеоформления документов о приеме на работу.'
    },
    {
        name: 'Наука в университете',
        url: 'https://science.itmo.ru/' ,
        descr: 'Наука в университете — путеводитель в мире научно-исследовательских и опытно конструкторских работ.'
    },
    {
        name: 'Портал для сотрудников',
        url: 'https://team.itmo.ru/',
        descr: 'Портал для сотрудников, адаптация, запись на курсы повышения квалификации'
    }
]

export const QuestsPanel = (props: PanelProps) => {
    const { ...rest } = props;
    const router = useRouteNavigator();

    const onQuestCardClick = (questId: number) => {
        // router.push(`/quest/${questId}`);
        router.push('/develop')
    };

    return (
        <Panel {...rest} disableBackground>
            <PanelHeader fixed>Quests</PanelHeader>
            <CustomGrid margin="auto" gap={"m"}>
                <Group>
                    <CardScroll size={"m"} showArrows={true} noSpaces={false}>
                        {quests.map((quest) => (
                            <Card
                                key={quest.id+'1'}
                                onClick={() => onQuestCardClick(quest.id)}
                                style={{background: quest.color, display: "flex", flexDirection:'row', justifyContent: 'center', alignItems: "center", gap: '30px', height: '10rem'}}
                            >
                                {quest.Icon}
                                <h2>{quest.title}</h2>
                            </Card>
                        ))}
                    </CardScroll>
                </Group>
                <Group header={<Header>Полезные ссылки</Header>} style={{gap: '10px', display: 'flex', flexDirection: 'column'}}>
                    {links.map((link, i) => (
                        <a href={link.url} style={{color: quests[i].color, textDecoration: 'none', marginTop: '10px'}} target={'_blank'} key={'a+'+link.descr}>
                            <ContentCard  header={link.name} key={link.descr} draggable marginHeight={10}/>
                        </a>
                    ))}
                    <Button size={'m'} before={<Icon24ShoppingCartOutline/>} onClick={() => router.push('/develop')} key={'store'} > Магазин </Button>
                </Group>
            </CustomGrid>
        </Panel>
    );
};
