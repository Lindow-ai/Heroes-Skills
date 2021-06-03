import Login  from './pages/Login'
import Dashboard  from './pages/Dashboard'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Store from './pages/Store'
import Training from './pages/Training'

const routes = [
    {
        'name': 'Login',
        'path': '/',
        'component': Login
    },
    {
        'name': 'Register',
        'path' : '/Register',
        'component': Register
    },
    {
        'name': 'Dashboard',
        'path': '/Dashboard',
        'component': Dashboard
    },
    {
        'name': 'Profile',
        'path': '/Profile',
        'component': Profile
    },
    {
        'name': 'Strore',
        'path': '/Strore',
        'component': Store
    },
    {
        'name': 'Training',
        'path': '/Training',
        'component': Training
    },
]

export default routes