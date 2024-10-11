import {questsStudents, questTeachers} from "../../consts/quests/quests";
import {Card, CardGrid, Panel} from "@vkontakte/vkui";
import {useState} from "react";
import {useParams} from "@vkontakte/vk-mini-apps-router";

export const CategoryPanel = () => {
    const [role, setRole] = useState('student') //TODO: remove student before deploy!!
    const params = useParams<'category'>()
    let quests

    if (role === 'student') {
        quests = questsStudents
    } else {
        quests = questTeachers
    }

    return (
        <Panel>
            <CardGrid size={'l'}>
                <h2>{params.category}</h2>
                {quests.map((quest) =>
                    <Card key={quest.name}>
                        <h4>{quest.name}</h4>
                        <p>{quest.desc}</p>
                    </Card>
                )}
            </CardGrid>
        </Panel>

    )
}