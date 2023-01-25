import React from 'react'
import "../styles/sidebar.css"
import home from "../assets/pics/home.svg"

export default function Sidebar() {
  return (
      <div className='db-btn-container'> 
          <button><img id="home" src={home} alt="hshhs" />Dashboard</button>
          <button>Schedule</button>
          <button>Tests</button>
          <button>Tasks</button>
          <button>Reports</button>
          <button>Activity</button>
    </div>
  )
}
