import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import {userRows} from '../../dummyData';
import {Link} from "react-router-dom";
import {useState} from "react";
export default function UserList() {
  const[data,setData]= useState(userRows)
  const handleDelete = (id)=>
  {
    setData(data.filter((item)=>item.id !==id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'User', width: 200},
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell:(params)=>
      {
        return (
          <>
          <Link to={"/users/"+params.row.id}>
          <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline  className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    },
   
  ];
  
  
  
  return (
    <div className="userList">
       <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnclick
        pageSize={8}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}
