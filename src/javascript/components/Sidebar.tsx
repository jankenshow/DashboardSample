import {
    LineStyle,
    Timeline,
    TrendingUp,
    PersonOutline,
    Storefront,
    AttachMoney,
    BarChart,
    // MailOutline,
    // DynamicFeed,
    // ChatBubbleOutline,
    WorkOutline,
    Report,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="sidebarListItemLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="sidebarListItemLink">
                            <li className="sidebarListItem">
                                <PersonOutline className="sidebarIcon" />
                                Staffs
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon" />
                            Projects
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Resources
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div> */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Other</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            Application form
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Goods management
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Attendance
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
