import {React, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../Data';
import {DeleteOutline} from '@mui/icons-material';
import { Link } from "react-router-dom";
import './ProductList.css'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";


function ProductList() {
    const [data,setData]=useState(productRows);
    const handleDelete=(id)=>{
        setData(data.filter((item)=>item.id!==id));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListUser">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
            field: "price",
            headerName: "Price Volume",
            width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
              return (
                  <>
                <Link to={"/product/" + params.row.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
    ];
  return (
    <>
            <Topbar/>
     <div className="container">

            <Sidebar/>
    <div className='productList'>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />
    </div>
     </div>
        </>
  )
}

export default ProductList