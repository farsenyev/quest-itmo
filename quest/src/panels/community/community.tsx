import {
    Panel,
    PanelProps,
    Avatar,
    SimpleCell,
    Header,
    Group,
} from "@vkontakte/vkui";
import {leaders} from "../../consts/leaderboard";



export const CommunityPanel = (props: PanelProps) => {
    const { ...rest } = props;

    return (
        <Panel {...rest} disableBackground>
            <h1>Community</h1>
            <Group
                style={{ margin: 20 }}
                header={<Header mode="primary">Таблица лидеров</Header>}
            >
                {leaders.map((leader, i) => (
                    <SimpleCell
                        key={i}
                        subtitle="Победитель"
                        style={{ padding: 10 }}
                        before={
                            <>
                                <p style={{margin: 10}} >{i+1}. </p>
                                <Avatar src={leader.imgSrc} />
                            </>
                        }
                        after={
                            <p>{leader.points} tokens</p>
                        }
                    >
                        {leader.name}
                    </SimpleCell>
                ))}
            </Group>
        </Panel>
    );
};
