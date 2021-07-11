import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthUserProvider, PrivateRoute, UnAuthRoute } from './addons/LoginAuth'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Home from './pages/Home'
import Login from './pages/Login'
import UserList from './pages/UserList'
import User from './pages/User'
import NewUser from './pages/NewUser'
import NotFoundPage from './pages/NotFound'

const App = () => {
    return (
        <AuthUserProvider>
            <Router>
                <div className="App">
                    <Topbar />
                    <Switch>
                        <UnAuthRoute path="/login" component={Login} exact />
                        <PrivateRoute path="/" component={AppContent} />
                    </Switch>
                </div>
            </Router>
        </AuthUserProvider>
    )
}

const AppContent = () => {
    return (
        <Router>
            <div className="container">
                <Sidebar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/users" component={UserList} />
                    <Route path="/user/:userId" component={User} />
                    <Route path="/newUser" component={NewUser} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
