import { SplitLayout, SplitCol, View } from '@vkontakte/vkui';
import { Epic } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import {EPanels} from "./consts/panels/panels";
import {EViews} from "./consts/views/veiws";
import {HomePanel} from "./panels/home/home";
import {CommunityPanel} from "./panels/community/community";
import {ProfilePanel} from "./panels/profile/profile";

export const App = () => {
    const {
        view: activeView = EViews.HOME,
        panel: activePanel = EPanels.HOME,
    } = useActiveVkuiLocation();

    return (
        <SplitLayout>
            <SplitCol>
                <Epic activeStory={activeView}>
                    <View id={EViews.HOME} activePanel={activePanel}>
                        <HomePanel id={EPanels.HOME}/>
                    </View>
                    <View id={EViews.COMMUNITY} activePanel={activePanel}>
                        <CommunityPanel id={EPanels.COMMUNITY}/>
                    </View>
                    <View id={EViews.PROFILE} activePanel={activePanel}>
                        <ProfilePanel id={EPanels.PROFILE}/>
                    </View>
                </Epic>
            </SplitCol>
        </SplitLayout>
    );
};
