import '../css/app.scss'
// import IMAGE from '../images/react.png'
// import LOGO from './images/logo.svg'
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
