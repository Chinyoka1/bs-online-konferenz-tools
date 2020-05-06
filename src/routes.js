import Home from './views/Home.svelte';
import ToolView from './views/ToolView.svelte';

const routes = [
    {
        name: '/',
        component: Home
    },
    {
        name: 'tool-view/:tool',
        component: ToolView
    }
]

export { routes }