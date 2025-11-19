import React, { useContext } from "react"
import style from './app.module.css'
import Headers from './components/header'
import AddImage from "./components/add_image"
import ListImagesMemo from "./components/list_images"

import { GlobalContext } from "./context/GlobalState"
import DeleteImage from "./components/delete_image"


export default function App() {
  const { showAdd, showDel } = useContext(GlobalContext)
  
  return(
      <main className={style.main}>
        <div className={style.main_container}>
        <Headers/>
        { showAdd && <AddImage/>} 
        { showDel && <DeleteImage/>}      
        <ListImagesMemo/>
        </div>
      </main>      
  )  
}