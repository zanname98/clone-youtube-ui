//Pages
import Home from '~/pages/Home';
import Shorts from '~/pages/Shorts';
import UserRegeter from '~/pages/UserRegeter';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/short', component: Shorts },
    { path: '/userRegeter', component: UserRegeter },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
