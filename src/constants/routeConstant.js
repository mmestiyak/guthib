import Home from '../components/Home'
import Repos from '../components/Repos'
export const routes = [
    {
        name: 'Home',
        component: Home,
        headerShown: false,
    },
    {
        name: 'Repositories',
        component: Repos,
        headerShown: true
    }
]