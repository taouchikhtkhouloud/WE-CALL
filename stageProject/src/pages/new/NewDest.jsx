import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
const NewDest = ({ title }) => {
 
  const navigate = useNavigate();
  const [Input, setInput] = useState({
    prefix:'',
    cost:'',
        description:'',

        
      error_list: [],
  });

  const handleInput = (e) => {
      e.persist();
      setInput({...Input, [e.target.name]: e.target.value })
  }

  const save = (e) => {
      e.preventDefault();
      
      const data = {
        prefix:Input.prefix,
        cost:Input.cost,

        description:Input.description,
       
      }

      axios.post('http://localhost:80/server/dest/save', data).then(function(response){
        console.log(response.data);
        navigate('/dest');
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
            <form onSubmit={save}>
              

              <div className="card-body">
                                
                             
                                    <div className="form-group mb-3">
                                        <label>prefix</label>
                                        <input type="text" name="prefix" onChange={handleInput} value={Input.prefix} className="form-control" />
                                        <span className="text-danger">{Input.error_list.prefix}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>description</label>
                                        <input type="text" name="description" onChange={handleInput} value={Input.description}  className="form-control" />
                                        <span className="text-danger">{Input.error_list.description}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>cost</label>
                                        <input type="text" name="cost" onChange={handleInput} value={Input.cost}  className="form-control" />
                                        <span className="text-danger">{Input.error_list.cost}</span>
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

export default NewDest;
