import {
    DataGrid,
    GridColDef,
    GridCellParams,
    // GridValueGetterParams,
} from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { userListRows } from '../data/dummyUserList'

export default function UserList() {
    const [data, setData] = useState(userListRows)

    const handleDelete = (id: number) => {
        let newData = data.slice()
        // delete selected user with id -> this gonna raise an error.
        // newData = newData.filter((item) => item.id !== id)
        // update selected user's age
        newData = newData.map((item) => {
            if (item.id == id) {
                item.age = 2000
                return item
            } else {
                return item
            }
        })
        setData(newData)
        console.log(data)
        console.log(newData)
    }

    const UserListIcon = (params: GridCellParams) => {
        return (
            <div className="userListUser">
                <img src={params.row.avatar} alt="" className="userListImage" />
                {params.getValue(params.id, 'firstName') || ''}{' '}
                {params.getValue(params.id, 'lastName') || ''}
            </div>
        )
    }

    const UserListActionButtonWrapper = (
        handleDelete: (id: number) => void
    ) => {
        const UserListActionButton = (params: GridCellParams) => {
            return (
                <>
                    <Link to={'/user/' + params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline
                        className="userListDelete"
                        onClick={() => handleDelete(params.row.id)}
                    />
                </>
            )
        }
        return UserListActionButton
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
            renderCell: UserListActionButtonWrapper(handleDelete),
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
