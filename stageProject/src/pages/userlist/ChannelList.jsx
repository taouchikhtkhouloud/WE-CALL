import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Channeltable from "../../components/datatable/Channeltable"

const RechargeList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Channeltable/>
      </div>
    </div>
  )
}

export default RechargeList