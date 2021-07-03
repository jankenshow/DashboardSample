import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from '@material-ui/icons'
import IMAGE from '../../images/react.png'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

export default function User() {
    // const id = useParams()

    return (
        <div className="user">
            <div className="userTitleContainer">
                <div className="userTitle">Edit User</div>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={IMAGE} alt="" className="userShowImage" />
                        <div className="userShowTopTitle">
                            <div className="userShowUserName">
                                Takayuki Yamada
                            </div>
                            <div className="userShowUserTitle">
                                Software Engineer
                            </div>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                yusha yoshihiko
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                20.10.1983
                            </span>
                        </div>
                        <span className="userShowTitle">Contact</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                +81 080 1234 5678
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                yusha_yoshihiko@gmail.com
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                New York | USA
                            </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="userName">UserName</label>
                                <input
                                    type="text"
                                    id="userName"
                                    placeholder="Yusha Yoshihiko"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="Takayuki Yamada"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="yusha_yoshihiko@gmail.com"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="+81 080 1234 5678"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="adress">Address</label>
                                <input
                                    type="text"
                                    id="adress"
                                    placeholder="New York | USA"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    src={IMAGE}
                                    alt=""
                                    className="userUpdateImage"
                                />
                                <label>
                                    <Publish className="userUpdateIcon" />
                                    <input
                                        type="file"
                                        id=""
                                        style={{ display: 'none' }}
                                        className="userUpdateInput"
                                    />
                                </label>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
