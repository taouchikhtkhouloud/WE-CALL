import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Desttable from "../../components/datatable/Desttable"

const DestList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Desttable/>
      </div>
    </div>
  )
}

export default DestList