import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import AddchartIcon from '@mui/icons-material/Addchart';
import { Link } from "react-router-dom";
const Widget = ({ type , nombre}) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Utilisateurs",
        isMoney: false,
        link: (<Link className="link" to="/users">Voir tous les utilisateurs</Link> ) ,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "abonnes":
      data = {
        title: "Abonnes",
        isMoney: false,
        link: (<Link className="link" to="/users">Voir tous les abonnes</Link> ) ,
        icon: (
          <PhoneCallbackIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "recharges":
      data = {
        title: "Recharges",
        isMoney: false,
        link: (<Link className="link" to="/recharges">Voir tous les recharges</Link> ) ,
        icon: (
          <AddchartIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
   
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {nombre}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
