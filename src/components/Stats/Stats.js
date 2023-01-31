import React from 'react'
import StatsCSS from './Stats.module.css'
import Chart from '../Chart/Chart'


export default function SidebarChart() {
  return (
    <div className={StatsCSS.container}>
        <section className={StatsCSS.items}>
            <div className={StatsCSS.item}>
                <button className={StatsCSS.item1}>1</button>
                <p>ps</p>
            </div>
            <div className={StatsCSS.item}>
                <button className={StatsCSS.item2}>2</button>
                <p>cs</p>
            </div>
            <div className={StatsCSS.item}>
                <button className={StatsCSS.item3}>3</button>
                <p>Up</p>
            </div>
            <div className={StatsCSS.item}>
                <button className={StatsCSS.item4}>4</button>
                <p>Down</p>
            </div>
            <div className={StatsCSS.item}>
                <button className={StatsCSS.item5}>5</button>
                <p>Maintenance</p>
            </div>
            <div className={StatsCSS.item}>
                <button className={StatsCSS.item6}>6</button>
                <p>DVIp</p>
            </div>
        </section>
        <section className={StatsCSS.summary}>
              <div className={StatsCSS.titles}>
                  <p>Total cap</p>
                  <p>Up time</p>
                  <p>Maintenance</p>
              </div>
              <div className={StatsCSS.info}>
                  <p>100</p>
                  <p>98%</p>
                  <p>1%</p>
              </div>
          </section>
          <Chart />
    </div>
  )
}
