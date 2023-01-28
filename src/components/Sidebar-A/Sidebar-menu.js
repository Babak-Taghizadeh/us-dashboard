import React from 'react'
import SidebarCSS from "./Sidebar.module.css"
import home from "../../assets/pics/home.svg"
import calender from "../../assets/pics/calender.svg"
import test from "../../assets/pics/test.svg"
import tasks from "../../assets/pics/tasks.svg"
import reports from "../../assets/pics/reports.svg"
import activity from "../../assets/pics/activity.svg"

export default function Sidebar() {
  return (
    <div className={SidebarCSS.container}> 
      <button><img src={home} alt="home" /><span>Dashboard</span></button>
      <button><img src={calender} alt="schedule" /><span>Schedule</span></button>
      <button><img src={test} alt="test" /><span>Tests</span></button>
      <button><img src={tasks} alt="tasks" /><span>Tasks</span></button>
      <button><img src={reports} alt="reports" /><span>Reports</span></button>
      <button><img src={activity} alt="activity" /><span>Activity</span></button>
    </div>
  )
}
