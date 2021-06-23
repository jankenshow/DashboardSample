import UserImage_1 from '../../images/react.png'
// import React from 'react'
import { Visibility } from '@material-ui/icons'

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Join Members</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img
                        src={UserImage_1}
                        alt="userImage"
                        className="widgetSmallImage"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">
                            Takayuki Yamada
                        </span>
                        <span className="widgetSmallUserTitle">
                            Software Engineer
                        </span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img
                        src={UserImage_1}
                        alt="userImage"
                        className="widgetSmallImage"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">
                            Tsuyoshi Muro
                        </span>
                        <span className="widgetSmallUserTitle">
                            Project Manager
                        </span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img
                        src={UserImage_1}
                        alt="userImage"
                        className="widgetSmallImage"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Shin Takuma</span>
                        <span className="widgetSmallUserTitle">
                            System Engineer
                        </span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img
                        src={UserImage_1}
                        alt="userImage"
                        className="widgetSmallImage"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">
                            Haruka Kinami
                        </span>
                        <span className="widgetSmallUserTitle">Sales</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
