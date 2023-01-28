import React from 'react'
import DashboardAdminCSS from './Dashboard-admin.module.css'
import Sidebar from '../../components/Sidebar-A/Sidebar-menu'
import Searchbar from '../../components/Searchbar/Searchbar'
import SidebarChart from '../../components/Sidebar-B/Sidebar-Chart'

export default function DashboardAdmin() {
  return (
    <div className={DashboardAdminCSS.container}>
      <aside>
        <Sidebar />
        <SidebarChart />
      </aside>
      <main>
        <Searchbar />
      </main>
    </div>
  )
}

