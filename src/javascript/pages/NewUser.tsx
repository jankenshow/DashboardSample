import React from 'react'

export default function NewUser() {
    return (
        <div className="newUser">
            <div className="newUserTitle">Create New User</div>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="userName">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        placeholder="Takayuki Yamada"
                    />
                </div>
                <div className="newUserItem">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Yusha Yoshihiko"
                    />
                </div>
                <div className="newUserItem">
                    <label htmlFor="gender">Gender</label>
                    <div className="newUserGender">
                        <input type="radio" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="others" value="other" />
                        <label htmlFor="othres">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="yusha_yoshihiko@gmail.com"
                    />
                </div>
                <div className="newUserItem">
                    <label htmlFor="phone">phone</label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="+81 080 1234 5678"
                    />
                </div>
                <div className="newUserItem">
                    <label htmlFor="adress">Adress</label>
                    <input
                        type="text"
                        id="adress"
                        placeholder="New York | USA"
                    />
                </div>
                <div className="newUserItem">
                    <label htmlFor="active">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
