import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Rechargestable from "../../components/datatable/Rechargestable"

const RechargeList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Rechargestable/>
      </div>
    </div>
  )
}

export default RechargeList