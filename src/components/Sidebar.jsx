import { Fragment, useState } from "react"
import NewNote from "./NewNote"
import Details from "./Details";

export default function Sidebar({notes,setNotes}) {
  const [openEditor,setOpenEditor] = useState(false);
  const [openDetails,setOpenDetails] = useState(null);
  const [isDetail, setIsDetail] = useState(false);

  function handleOpenNote() {
    setOpenEditor(!openEditor)
  }
  
  function handleOpenDetails(x) {
   setOpenDetails([x])
   setIsDetail(!isDetail);
   console.log(openDetails)
  }

  return(
    <div className="sidebar-area">
      {!openEditor ? (
      <Fragment>
     <h2>All Notes ({notes.length})</h2>
        {notes.length === 0 ? (
          <h5>You don’t have any notes yet. Start a new note to capture your thoughts and ideas.</h5>
        ) : (
          notes.map(x => (
            <div key={x.id} className="new-notes" onClick={() => handleOpenDetails(x)}>
              <h3>{x.title}</h3>
              <h5>{x.tags}</h5>
              <h6>{x.date}</h6>
              <hr />
            </div>
          ))
        )} 
        <img className={isDetail ? 'hidden' : 'plus'} src="./assets/images/plus.svg" onClick={handleOpenNote} />
        
      </Fragment>
      ) : (
    <NewNote openEditor={openEditor} setOpenEditor={setOpenEditor} notes={notes} setNotes={setNotes}/>
  )} 
    {isDetail && <Details openDetails={openDetails} notes={notes} />}
    </div>
  )
}

