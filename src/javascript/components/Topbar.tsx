import '../../css/topbar.scss'
import IMAGE from '../../images/react.png'
// import React from 'react'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <img src={IMAGE} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
