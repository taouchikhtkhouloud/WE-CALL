import "./datatable.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
const Destination = () => {

  const [dest, setDest] = useState([]);

  useEffect(() => {
    getDest();    
  }, []);

  function getDest(){

  
  axios.get('http://localhost:80/server/dest/').then(res=>{
      console.log(res.data);
      setDest(res.data);
  });
}
const deleteDest = (id) => {
  axios.delete(`http://localhost:80/server/dest/${id}/delete`).then(function(response){
      console.log(response.data);
      getDest();
  });
}
  


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Destination
        <Link to="/dest/new" className="link">
          Add New
        </Link>
      </div>
      <Table responsive>
      <thead>
        <tr>
        <th>id</th>
          <th>prefix</th>
          <th>description</th>
          <th>cost</th>

          

        </tr>
      </thead>
      <tbody>
      {dest.map((dest, key) =>
                        <tr key={key}>
                            <td>{dest.id}</td>
                            <td>{dest.prefix}</td>
                            <td>{dest.description}</td>
                            <td>{dest.cost}</td>

                            <td>
                                <button className="deleteButton" onClick={() => deleteDest(dest.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                   
      </tbody>
    </Table>
  
    </div>
  );
};

export default Destination;
