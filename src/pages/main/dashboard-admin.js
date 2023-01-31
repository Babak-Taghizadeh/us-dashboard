import React from 'react'
import DashboardAdminCSS from './Dashboard-admin.module.css'
import SidebarCSS from "../../components/Sidebar/Sidebar.module.css";
import Sidebar from '../../components/Sidebar/Sidebar-menu'
// import Searchbar from '../../components/Searchbar/Searchbar'
import Stats from '../../components/Stats/Stats'

export default function DashboardAdmin() {
  return (
    <div className={DashboardAdminCSS.container}>
        <Sidebar />
      <main className={SidebarCSS.mainContent}>
      <aside className={DashboardAdminCSS.stats}>
        <Stats />
      </aside>
        {/* <Searchbar /> */}
      </main>
    </div>
  )
}

