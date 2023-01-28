import React from 'react'
import SidebarChartCSS from './Sidebar-chart.module.css'

export default function SidebarChart() {
  return (
    <div className={SidebarChartCSS.container}>
        <section className={SidebarChartCSS.items}>
            <div className={SidebarChartCSS.item}>
                <button className={SidebarChartCSS.item1}>1</button>
                <p>ps</p>
            </div>
            <div className={SidebarChartCSS.item}>
                <button className={SidebarChartCSS.item2}>2</button>
                <p>cs</p>
            </div>
            <div className={SidebarChartCSS.item}>
                <button className={SidebarChartCSS.item3}>3</button>
                <p>Up</p>
            </div>
            <div className={SidebarChartCSS.item}>
                <button className={SidebarChartCSS.item4}>4</button>
                <p>Down</p>
            </div>
            <div className={SidebarChartCSS.item}>
                <button className={SidebarChartCSS.item5}>5</button>
                <p>Maintenance</p>
            </div>
            <div className={SidebarChartCSS.item}>
                <button className={SidebarChartCSS.item6}>6</button>
                <p>DVIp</p>
            </div>
        </section>
        <section className={SidebarChartCSS.summary}>

        </section>
        <section className={SidebarChartCSS.chart}>

        </section>   
    </div>
  )
}
