import React from 'react'
import './Widget.css'
function Widget() {
    const Button = ({type}) =>{
      return <button className={"widgetlgButton " + type}>{type}</button>
    }
  return (
    <div className='widgetlg'>
      <h3 className="widgetlgTitle">LAtest transactions</h3>
      <table className="widgetlgTable">
        <tr className="widgetlgTr">
        <th className="widgetlgTh">Customer</th>
        <th className="widgetlgTh">Date</th>
        <th className="widgetlgTh">Amount</th>
        <th className="widgetlgTh">Status</th>
        </tr>
        <tr className="widgetlgTr"><td className="widgetlgUser">
          <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetlgImg" />
          <span className="widgetlgName">khouloud taouchikht</span>
          </td>
          <td className="widgetlgDate">2 Jun 2022</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetlgTr"><td className="widgetlgUser">
          <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetlgImg" />
          <span className="widgetlgName">khouloud taouchikht</span>
          </td>
          <td className="widgetlgDate">2 Jun 2022</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetlgTr"><td className="widgetlgUser">
          <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetlgImg" />
          <span className="widgetlgName">khouloud taouchikht</span>
          </td>
          <td className="widgetlgDate">2 Jun 2022</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus"><Button type="Pending"/></td>
        </tr>
        
      </table>
    </div>
  )
}

export default Widget