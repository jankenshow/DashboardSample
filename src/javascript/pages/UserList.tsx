import { DataGrid, GridColDef, GridCellParams } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { userListRows } from '../data/dummyUserList'
// import { useAuthUser, useLogout } from '../addons/LoginAuth'

export default function UserList() {
    const [data, setData] = useState(userListRows)
    // const authUser = useAuthUser()
    // const logout = useLogout()

    // const handleEdit = () => {
    //     console.log(authUser)
    //     logout()
    // }

    const handleDelete = (id: number) => {
        let newData = data.slice()
        newData = newData.filter((item) => item.id !== id)
        setData(newData)
    }

    const UserListIcon = (params: GridCellParams) => {
        return (
            <div className="userListUser">
                <img src={params.row.avatar} alt="" className="userListImage" />
                {/* {params.getValue(params.id, 'firstName') || ''}{' '}
                {params.getValue(params.id, 'lastName') || ''} */}
                {params.row.firstName + ' ' + params.row.lastName}
            </div>
        )
    }

    const UserListActionButton = (params: GridCellParams) => {
        return (
            <>
                <Link to={'/user/' + params.row.id}>
                    <button
                        className="userListEdit"
                        // onClick={() => handleEdit()}
                    >
                        Edit
                    </button>
                </Link>
                <DeleteOutline
                    className="userListDelete"
                    onClick={() => handleDelete(params.row.id)}
                />
            </>
        )
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'avatar',
            headerName: 'User',
            width: 200,
            renderCell: UserListIcon,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 70,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: UserListActionButton,
        },
    ]

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={20}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
