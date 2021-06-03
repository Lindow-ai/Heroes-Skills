import Login  from './pages/Login'
import Dashboard  from './pages/Dashboard'
import Register from './pages/Register'

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
    }
]

export default routes