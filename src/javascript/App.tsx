import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Home from './pages/Home'

export const App = () => {
    return (
        <div className="App">
            <Topbar />
            <div className="container">
                <Sidebar />
                <Home />
            </div>
        </div>
    )
}
