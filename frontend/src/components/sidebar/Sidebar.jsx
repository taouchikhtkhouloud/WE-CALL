import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RouteIcon from '@mui/icons-material/Route';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import logo from '../../images/WE CALL.png'
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
        <div className="logo"><img src={logo} alt="" className='logoImg' /></div>        </Link>
      </div>
   
      <div className="center">
        <ul>
        <Link to='/home' style={{ textDecoration: "none" }}>

          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Utilisateurs</span>
            </li>
          </Link>
          <Link to="/abonnes" style={{ textDecoration: "none" }}>
            <li>
              <MobileFriendlyIcon className="icon" />
              <span>Abonnes</span>
            </li>
          </Link>
          <Link to="/recharges" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Recharges</span>
          </li>
          </Link>
          <Link to='/channel' style={{ textDecoration: "none" }}>
          <li>
            <RouteIcon className="icon" />
            <span>Channel</span>
          </li>
          </Link>
          <Link to='/dest' style={{ textDecoration: "none" }}>
          <li>
            <GpsFixedIcon className="icon" />
            <span>Destination</span>
          </li>
          </Link>
       
          <Link to='/notification' style={{ textDecoration: "none" }}>

          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          </Link>
          <Link to='/setting' style={{ textDecoration: "none" }}>

          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <Link to='/profile' style={{ textDecoration: "none" }}>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <Link to='/' style={{ textDecoration: "none" }}>

          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
          
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
