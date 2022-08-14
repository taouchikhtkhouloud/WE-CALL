import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


const NewRevenue = () => {
 
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);
    const [total, setTotal] = useState({
        id:'',
        Total:'',

    });

    const [id,setId]=useState([]);
    const selectOption = (event, value) => {
        if (event.target.checked) {
           // here the radio is checked and value contains the option's value
           console.log(value.id);
           setId(value.id);
           return id;
        }
     }
   
    useEffect(() => {
        getRevenue();
    }, []);

    function getRevenue() {
        axios.get(`http://localhost:80/server/revenus/`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }
    

    const handleInput = (e) => {
        e.persist();
        setTotal({...total, [e.target.name]: e.target.value })
        console.log(total.Total);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data ={
            id:id,
            Total:total.Total,
        }
        console.log(data);
        axios.put(`http://localhost:80/server/revenus/edit`,data).then(function(response){
            console.log(response.data);
            navigate('/home');
        });
        
    } 
    return (
        <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>Redefinir le total d'un mois</h1>
          </div>
            
            <div className="right">
            <h1>Edit user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Mois: </label>
                            </th>
                            <td>
                            {inputs.map((input) => (
                                
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => selectOption(e, input)}/>
                                <label className="form-check-label" for="flexRadioDefault1" >
                                 {input.name}
                                </label>
                              </div>
                           
                          
                            ))}                     
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Total: </label>
                            </th>
                            <td> 
                                <input  type="text" name="Total" onChange={handleInput} value={total.Total}/>
                            </td>
                        </tr>
                        <tr>
                           
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        </div>
        </div>
    )
};

export default NewRevenue;
