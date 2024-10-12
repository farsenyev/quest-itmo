import { Panel, PanelProps, Avatar, Flex,  PanelHeader, FixedLayout, Gradient, Button, Placeholder } from "@vkontakte/vkui";

export const ProfilePanel = (props: PanelProps) => {
    const { ...rest } = props;

    return (
        <Panel {...rest} disableBackground>

              <PanelHeader>Profile</PanelHeader>
              <FixedLayout vertical="bottom">
                <Gradient to="top">
                  <Flex justify="center" style={{ padding: 32 }}>
                    <Button>Click</Button>
                  </Flex>
                </Gradient>
              </FixedLayout>
              
                <Gradient mode="tint" to="top">
                  <Placeholder
                    icon={<Avatar size={96} />}
                    header="Гасанов Шахнаваз"
                    action={
                      <Button size="m" mode="secondary">
                        Редактировать
                      </Button>
                    }
                  >
                    Студент
                  </Placeholder>
                </Gradient>
                  
                  
            </Panel>
        );
      };
      
