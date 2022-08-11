import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import axios from 'axios';
import { useState, useEffect } from "react";
const Home = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [nbreUtilisateur, setNbreUtilisateur] = useState([]);
  useEffect(() => {
      getUtilisateurs();    
  }, []);

  function getUtilisateurs(){

  
  axios.get('http://localhost:80/server/user/utilisateurs/').then(res=>{
      console.log(res.data.length);
      setNbreUtilisateur(res.data.length);
    });
   
}
const [recharges, setRecharges] = useState([]);
const [nbreR, setNbreR] = useState([]);
useEffect(() => {
    getRecharges();    
  }, []);

  function getRecharges(){

  
  axios.get('http://localhost:80/server/recharge/').then(res=>{
      console.log(res.data);
      setNbreR(res.data.length);
  });
}

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" nombre={nbreUtilisateur}/>
          <Widget type="abonnes" nombre={nbreUtilisateur} />
          <Widget type="recharges" nombre={nbreR}/>
          
        </div>
        <div className="charts">
         {/*  <Featured /> */}
          <Chart title="Revenus des 6 derniers mois " aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">les derniers appels effectués</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
