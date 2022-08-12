import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
const NewRevenue = ({ title }) => {
 
  const navigate = useNavigate();
  const [Input, setInput] = useState({
    name:'',
        description:'',
        type:'',

        
      error_list: [],
  });

  const handleInput = (e) => {
      e.persist();
      setInput({...Input, [e.target.name]: e.target.value })
  }

  const save = (e) => {
      e.preventDefault();
      
      const data = {
        name:Input.name,
        type:Input.type,

        description:Input.description,
       
      }

      axios.post('http://localhost:80/server/channel/save', data).then(function(response){
        console.log(response.data);
        navigate('/channel');
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
                                        <label>name</label>
                                        <input type="text" name="name" onChange={handleInput} value={Input.name} className="form-control" />
                                        <span className="text-danger">{Input.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>description</label>
                                        <input type="text" name="description" onChange={handleInput} value={Input.description}  className="form-control" />
                                        <span className="text-danger">{Input.error_list.description}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>type</label>
                                        <input type="text" name="type" onChange={handleInput} value={Input.type}  className="form-control" />
                                        <span className="text-danger">{Input.error_list.type}</span>
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

export default NewChanNewRevenuenel;
