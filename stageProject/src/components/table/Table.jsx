import "./table.scss";

import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect, useMemo } from "react";
import axios from 'axios';

const List = () => {
  
   const columns = [
    { field: "id", headerName: "ID", width: 70 },

    { field: "accountcode", headerName: "accountcode", width: 170 },
    {
      field: "src",
      headerName: "src",
      width: 120},
    {
      field: "dst",
      headerName: "dst",
      width: 120,
    },
  
    {
      field: "dcontext",
      headerName: "dcontext",
      width: 110,
    },
    {
      field: "clid",
      headerName: "clid",
      width: 160,
      
    },
    {
      field: "channel",
      headerName: "channel",
      width: 160,
      
    },
    {
      field: "dstChannel",
      headerName: "dstChannel",
      width: 160,
      
    },
    {
      field: "lastapp",
      headerName: "lastapp",
      width: 160,
      
    },
    {
      field: "lastdata",
      headerName: "lastdata",
      width:160,
      
    },
    {
      field: "start",
      headerName: "start",
      width: 160,
      
    },
    {
      field: "answer",
      headerName: "answer",
      width: 160,
      
    },{
      field: "end",
      headerName: "end",
      width: 160,
      
    },
    {
      field: "duration",
      headerName: "duration",
      width: 160,
      
    },
    {
      field: "billsec",
      headerName: "billsec",
      width: 160,
      
    },
    {
      field: "disposition",
      headerName: "disposition",
      width: 160,
      
    },{
      field: "amaflags",
      headerName: "amaflags",
      width: 160,
      
    },
    {
      field: "userfield",
      headerName: "userfield",
      width: 160,
      
    },{
      field: "uniqueid",
      headerName: "uniqueid",
      width: 160,
      
    },{
      field: "linkedid",
      headerName: "linkedid",
      width: 160,
      
    },
    {
      field: "peeraccount",
      headerName: "peeraccount",
      width: 160,
      
    },{
      field: "sequence",
      headerName: "sequence",
      width: 160,
      
    },
  ];
  
  const [cdr , setCdr]=useState([]);
  useEffect(() => {
    getCdr();    
}, []);

function getCdr(){


axios.get('http://localhost:80/server/cdr/').then(res=>{
    console.log(res.data);
    setCdr(res.data);
});
}
  return (
    <div style={{ height: 300, width: "100%" }}>

    <DataGrid
  
  rows={cdr}
  columns={columns}
  pageSize={5}
  columnBuffer={5}
  rowsPerPageOptions={[5]}
  checkboxSelection
/>
</div>
  );
};

export default List;
