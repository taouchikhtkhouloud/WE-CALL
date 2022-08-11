import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
const NewRecharge = ({ title }) => {
 
  const navigate = useNavigate();
  const [rechargeInput, setRecharge] = useState({
    code:'',
        balance:'',
        active:'',
        description:'',

        
      error_list: [],
  });

  const handleInput = (e) => {
      e.persist();
      setRecharge({...rechargeInput, [e.target.name]: e.target.value })
  }

  const save = (e) => {
      e.preventDefault();
      
      const data = {
        code:rechargeInput.code,
        balance:rechargeInput.balance,
        active:rechargeInput.active,

        description:rechargeInput.description,
       
      }

      axios.post('http://localhost:80/server/recharge/save', data).then(function(response){
        console.log(response.data);
        navigate('/recharges');
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
                                        <label>Code</label>
                                        <input type="text" name="code" onChange={handleInput} value={rechargeInput.code} className="form-control" />
                                        <span className="text-danger">{rechargeInput.error_list.code}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Balance</label>
                                        <input type="text" name="balance" onChange={handleInput} value={rechargeInput.balance}  className="form-control" />
                                        <span className="text-danger">{rechargeInput.error_list.balance}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Active</label>
                                        <input type="text" name="active" onChange={handleInput} value={rechargeInput.active}  className="form-control" />
                                        <span className="text-danger">{rechargeInput.error_list.active}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Price</label>
                                        <input type="text" name="description" onChange={handleInput} value={rechargeInput.description}  className="form-control" />
                                        <span className="text-danger">{rechargeInput.error_list.description}</span>
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

export default NewRecharge;
