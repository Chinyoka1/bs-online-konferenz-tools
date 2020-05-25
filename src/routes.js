import Home from './views/Home.svelte';
import ToolView from './views/ToolView.svelte';
import Imprint from './views/Imprint.svelte';
import PrivacyPolicy from './views/PrivacyPolicy.svelte';

const routes = [
    {
        name: '/',
        component: Home
    },
    {
        name: 'tool-view/:tool',
        component: ToolView
    },
    {
        name: 'impressum',
        component: Imprint
    },
    {
        name: 'datenschutzerklaerung',
        component: PrivacyPolicy
    }
]

export { routes }