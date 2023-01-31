import React from "react";
import SidebarCSS from './Sidebar.module.css'
import {ReactComponent as Home} from "../../assets/pics/home.svg"
import { ReactComponent as Calender } from "../../assets/pics/calender.svg"
import {ReactComponent as Test} from "../../assets/pics/test.svg"
import {ReactComponent as Tasks} from "../../assets/pics/tasks.svg"
import {ReactComponent as Reports} from "../../assets/pics/reports.svg"
import {ReactComponent as Activity} from "../../assets/pics/activity.svg"

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <Home className={SidebarCSS.icon} />,
    },
    {
        title: "Schedule",
        path: "/schedule",
        icon: <Calender className={SidebarCSS.icon}/>,
    },
    {
        title: "Tests",
        path: "/tests",
        icon: <Test className={SidebarCSS.icon} />,
    },
    {
        title: "Tasks",
        path: "/tasks",
        icon: <Tasks className={SidebarCSS.icon} />,
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <Reports className={SidebarCSS.icon} />,
    },
    {
        title: "Activity",
        path: "/activity",
        icon: <Activity className={SidebarCSS.icon} />,
    },
]


// {/* <button><img src={home} alt="home" /><span>Dashboard</span></button>
// <button><img src={calender} alt="schedule" /><span>Schedule</span></button>
// <button><img src={test} alt="test" /><span>Tests</span></button>
// <button><img src={tasks} alt="tasks" /><span>Tasks</span></button>
// <button><img src={reports} alt="reports" /><span>Reports</span></button>
// <button><img src={activity} alt="activity" /><span>Activity</span></button> */}