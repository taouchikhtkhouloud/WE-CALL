import "./datatable.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
const Rechargestable = () => {

  const [recharges, setRecharges] = useState([]);

  useEffect(() => {
    getRecharges();    
  }, []);

  function getRecharges(){

  
  axios.get('http://localhost:80/server/recharge/').then(res=>{
      console.log(res.data);
      setRecharges(res.data);
  });
}
const deleteRecharge = (id) => {
  axios.delete(`http://localhost:80/server/recharge/${id}/delete`).then(function(response){
      console.log(response.data);
      getRecharges();
  });
}
  


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Recharge
        <Link to="/recharges/new" className="link">
          Add New
        </Link>
      </div>
      <Table responsive>
      <thead>
        <tr>
        <th>id</th>
          <th>code</th>
          <th>balance</th>
          <th>active</th>

          <th>price</th>
          

        </tr>
      </thead>
      <tbody>
      {recharges.map((recharge, key) =>
                        <tr key={key}>
                            <td>{recharge.id}</td>
                            <td>{recharge.code}</td>
                            <td>{recharge.balance}</td>
                            <td>{recharge.active}</td>

                            <td>{recharge.description}</td>
                            <td>
                                <button className="deleteButton" onClick={() => deleteRecharge(recharge.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                   
      </tbody>
    </Table>
  
    </div>
  );
};

export default Rechargestable;
