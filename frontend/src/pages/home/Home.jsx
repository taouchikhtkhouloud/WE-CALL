import React from 'react'
import Chart from '../../components/chart/Chart'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import './Home.css'
import {Userdata} from '../../Data'
import WidgetSmall from '../../components/widgetsmall/Widget'
import WidgetLarge from '../../components/widgetlarge/Widget'

function Home() {
  return (
    <div className='home'>
    <Featuredinfo/>
    <Chart data={Userdata} title="User Analytics" dataKey="Active User"/>
    <div className="homeWidgets">
      <WidgetSmall/>
      <WidgetLarge/>
    </div>
    </div>
  )
}

export default Home