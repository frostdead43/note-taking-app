import { useRef } from "react";
export default function Details({notes,openDetails,setNotes, handleGoBack}) {
const dialogRef = useRef(null)

  function handleOpenModal() {
    dialogRef.current.showModal();
  }

  function handleCloseModal() {
    dialogRef.current.close();
  }

function handleDelete() {
    setNotes(notes.filter(x => x.id !== openDetails.id));
    dialogRef.current.close();
    handleGoBack(); 
}
  
  // console.log(notes);
  // console.log(openDetails);

  return (
   <div>
      <div className="new-note-header">
        <h4 onClick={handleGoBack}>Go back</h4>
        <div className="note-flex">
          <img src="/assets/images/delete-icon.svg" onClick={handleOpenModal}/>
          <img src="/assets/images/archive-icon.svg"/>
          <h5 onClick={handleGoBack}>Cancel</h5>
          <button>Save Note</button>
        </div>
      </div>

      <div className="detail">
        <h2>{openDetails.title}</h2>
        <div className="new-note-body">
          <div className="note-input">
            <img src="/assets/images/tag-mini.svg"/>
            <h6>Tags</h6>
            <h6 style={{color:"rgba(51, 92, 255, 1)"}}>{openDetails.tags}</h6>
          </div>
          <div className="note-input">
            <img src="/assets/images/clock-icon.svg"/>
            <h6>Last edited</h6>
            <h6 style={{color:"rgba(51, 92, 255, 1)"}}>{openDetails.date}</h6>
          </div>
      </div>
      <hr />
        <div className="asd">
          <textarea disabled defaultValue={openDetails.notes}></textarea>
        </div>
        <dialog ref={dialogRef}>
          <h3>Delete Note</h3>
          <p>Are you sure you want to permanently delete this note? This action cannot be undone.</p>
          <div className="modal-buttons">
            <button onClick={handleCloseModal}>Cancel</button>
            <button onClick={handleDelete}>Delete Note</button>
          </div>
        </dialog>
      </div>
      
    </div>
  )
}