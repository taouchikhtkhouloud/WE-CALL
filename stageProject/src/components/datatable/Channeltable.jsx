import "./datatable.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
const Channels = () => {

  const [channels, setChannel] = useState([]);

  useEffect(() => {
    getChannel();    
  }, []);

  function getChannel(){

  
  axios.get('http://localhost:80/server/channel/').then(res=>{
      console.log(res.data);
      setChannel(res.data);
  });
}
const deleteChannel = (id) => {
  axios.delete(`http://localhost:80/server/channel/${id}/delete`).then(function(response){
      console.log(response.data);
      getChannel();
  });
}
  


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Channel
        <Link to="/channel/new" className="link">
          Add New
        </Link>
      </div>
      <Table responsive>
      <thead>
        <tr>
        <th>id</th>
          <th>name</th>
          <th>description</th>
          <th>type</th>

          

        </tr>
      </thead>
      <tbody>
      {channels.map((channel, key) =>
                        <tr key={key}>
                            <td>{channel.id}</td>
                            <td>{channel.name}</td>
                            <td>{channel.description}</td>
                            <td>{channel.type}</td>

                            <td>
                                <button className="deleteButton" onClick={() => deleteChannel(channel.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                   
      </tbody>
    </Table>
  
    </div>
  );
};

export default Channels;
