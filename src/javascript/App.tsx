import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Home from './pages/Home'
import UserList from './pages/UserList'
import User from './pages/User'
import NewUser from './pages/NewUser'
import NotFoundPage from './pages/NotFound'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Topbar />
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
            </div>
        </Router>
    )
}

export default App
