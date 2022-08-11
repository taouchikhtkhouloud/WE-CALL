import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
 
  const navigate = useNavigate();
  const [utilisateurInput, setUtilisateur] = useState({
    first_name:'',
        last_name:'',
        email:'',
        phone:'',
        
      error_list: [],
  });

  const handleInput = (e) => {
      e.persist();
      setUtilisateur({...utilisateurInput, [e.target.name]: e.target.value })
  }

  const saveStudent = (e) => {
      e.preventDefault();
      
      const data = {
        first_name:utilisateurInput.first_name,
        last_name:utilisateurInput.last_name,
        email:utilisateurInput.email,
        phone:utilisateurInput.phone,
       
      }

      axios.post('http://localhost:80/server/user/utilisateurs/save', data).then(function(response){
        console.log(response.data);
        navigate('/users');
    });
    }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form onSubmit={saveStudent}>
              

              <div className="card-body">
                                
                             
                                    <div className="form-group mb-3">
                                        <label>Prenom</label>
                                        <input type="text" name="first_name" onChange={handleInput} value={utilisateurInput.first_name} className="form-control" />
                                        <span className="text-danger">{utilisateurInput.error_list.first_name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Nom</label>
                                        <input type="text" name="last_name" onChange={handleInput} value={utilisateurInput.last_name}  className="form-control" />
                                        <span className="text-danger">{utilisateurInput.error_list.last_name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" onChange={handleInput} value={utilisateurInput.email}  className="form-control" />
                                        <span className="text-danger">{utilisateurInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Phone</label>
                                        <input type="text" name="phone" onChange={handleInput} value={utilisateurInput.phone}  className="form-control" />
                                        <span className="text-danger">{utilisateurInput.error_list.phone}</span>
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
  );
};

export default New;
