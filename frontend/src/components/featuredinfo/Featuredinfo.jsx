import React from 'react'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import './Featuredinfo.css' 
function Featuredinfo() {
  return (
    <div className='features'>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
          
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,412</span>
              <span className="featuredMoneyRate">-11.4
              <ArrowDownward className='featuredIcon negative'/>
              </span>

            </div><span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
          
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,412</span>
              <span className="featuredMoneyRate">-11.4
              <ArrowDownward className='featuredIcon negative'/>
              </span>

            </div><span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
          
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,412</span>
              <span className="featuredMoneyRate">11.4
              <ArrowUpward className='featuredIcon positive'/>
              </span>

            </div><span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default Featuredinfo