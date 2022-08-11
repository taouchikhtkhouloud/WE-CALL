import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { getListSubheaderUtilityClass } from "@mui/material";
import Table from 'react-bootstrap/Table';
const Usertable = () => {

  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
      getUtilisateurs();    
  }, []);

  function getUtilisateurs(){

  
  axios.get('http://localhost:80/server/user/utilisateurs/').then(res=>{
      console.log(res.data);
      setUtilisateurs(res.data);
  });
}
const deleteUser = (id) => {
  axios.delete(`http://localhost:80/server/user/utilisateurs/${id}/delete`).then(function(response){
      console.log(response.data);
      getUtilisateurs();
  });
}
  const handleDelete = (id) => {
    setUtilisateurs(utilisateurs.filter((item) => item.id !== id));
  };


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <Table responsive>
      <thead>
        <tr>
        <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>email</th>
          <th>phone</th>

        </tr>
      </thead>
      <tbody>
      {utilisateurs.map((utilisateur, key) =>
                        <tr key={key}>
                            <td>{utilisateur.id}</td>
                            <td>{utilisateur.first_name}</td>
                            <td>{utilisateur.last_name}</td>

                            <td>{utilisateur.email}</td>
                            <td>{utilisateur.phone}</td>
                            <td>
                                <Link className="viewButton" to={`single/${utilisateur.id}`} style={{marginRight: "10px"}}>View</Link>
                                <button className="deleteButton" onClick={() => deleteUser(utilisateur.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                   
      </tbody>
    </Table>
  
    </div>
  );
};

export default Usertable;
