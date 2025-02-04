import { useState } from 'react'
import './style/App.css'
import "./style/reset.css"
import Header from "./components/Header.jsx"
import MenuBar from "./components/MenuBar.jsx"
import NewNote from './components/NewNote.jsx'


function App() {

  return (
    <>
    <Header />
    {/* <Search/> */}
    {/* <Sidebar /> */}
    <MenuBar />
    {/* <Archive /> */}
    {/* <Settings /> */}
    {/* <Tags/> */}
    {/* <NewNote/> */}
    </>
  )
}

export default App
