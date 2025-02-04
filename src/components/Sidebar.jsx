import { Fragment, useState } from "react"
import NewNote from "./NewNote"
import { h3 } from "motion/react-client";

export default function Sidebar({notes,setNotes}) {
  const [openEditor,setOpenEditor] = useState(false);

  function handleOpenNote() {
    setOpenEditor(!openEditor)
  }
  
  return(
    <div className="sidebar-area">
      {!openEditor ? (
      <Fragment>
        <h2>All Notes({notes.length})</h2>
        <h5>You don’t have any notes yet. Start a new note to capture your thoughts and ideas.</h5>
        <img className="plus" src="./assets/images/plus.svg" onClick={handleOpenNote}/>
          {notes.map(x =>
           <div key={x.id} className="new-notes">
            <h3>{x.title}</h3>
            <h5>{x.tags}</h5>
            <h6>{x.date}</h6>
            <hr />
          </div>)}
      </Fragment>
      ) : (
    <NewNote openEditor={openEditor} setOpenEditor={setOpenEditor} notes={notes} setNotes={setNotes}/>
  )} 
    </div>
  )
}

