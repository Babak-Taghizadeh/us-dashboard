import React from 'react'
import SearchbarCSS from './Searchbar.module.css'
import search from "../../assets/pics/search.svg"

export default function Searchbar() {
  return (
    <div className={SearchbarCSS.container}>
        <input type="text" />
        <button><img src={search} alt='search-button'/></button>
    </div>
  )
}
