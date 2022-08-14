import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import Table from 'react-bootstrap/Table';

const Single = () => {

   
  
  const {userID} = useParams();






  const [inputs, setInputs] = useState([]);

  console.log(userID);
  useEffect(() => {
    getUtilisateurs();
  }, []);

  function getUtilisateurs() {
      axios.get(`http://localhost:80/server/user/utilisateurs/${userID}`).then(function(response) {
          console.log(response.data);
          setInputs(response.data);
      });
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}
const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:80/server/user/utilisateurs/${userID}/edit`, inputs).then(function(response){
        console.log(response.data);
       
    });
    
}

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">

            <h1 className="title">Information</h1>
            <div className="item">
             
              <div className="details">
              <form onSubmit={handleSubmit}>
              

              <div className="card-body">
                                
                             
                                    <div className="form-group mb-3">
                                        <label>Prenom</label>
                                        <input type="text" name="first_name" onChange={handleChange} value={inputs.first_name} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Nom</label>
                                        <input type="text" name="last_name" onChange={handleChange} value={inputs.last_name}  className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" onChange={handleChange} value={inputs.email}  className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Phone</label>
                                        <input type="text" name="phone" onChange={handleChange} value={inputs.phone}  className="form-control" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">enregistrer</button>
                                    </div>
                                

                            </div>
            </form>
              </div>
            </div>
          </div>
          
        </div>
        
        </div>
      </div>
   
  );
};

export default Single;
