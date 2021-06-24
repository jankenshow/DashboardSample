import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Home from './pages/Home'
import UserList from './pages/UserList'
import NotFoundPage from './pages/NotFound'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Topbar />
                <div className="container">
                    <Sidebar />
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/users">
                            <UserList />
                        </Route>
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
