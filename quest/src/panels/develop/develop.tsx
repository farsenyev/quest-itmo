import {Panel, PanelHeader, Flex, Image} from "@vkontakte/vkui";

export const DevelopPanel = () => {
    return(
        <Panel>
            <PanelHeader>Dev</PanelHeader>
            <Flex direction={'column'} justify={'center'} align={'center'}>
                <h2>В разработке</h2>
                <Image src="https://media1.tenor.com/m/GEM96zAr7nAAAAAd/bear-answer-bear-typing.gif" alt="developing..." size={200} borderRadius={'l'}/>
            </Flex>
        </Panel>

    )
}