import { div } from "motion/react-client";
import { useRef } from "react";


export default function ArchiveDetail({ closeArchiveDetail, notes , setNotes,  archiveDetail , archiveNotes, setArchiveNotes}) {
const dialogRef = useRef(null)
const archiveRef = useRef(null)

function  handleOpenArchiveModal()  {
  archiveRef.current.showModal();
}

function handleCloseArchiveModal() {
  archiveRef.current.close();
}

  function handleOpenModal() {
    dialogRef.current.showModal();
  }

  function handleCloseModal() {
    dialogRef.current.close();
  }
  
  function handleRestore(id) {
    const restore = archiveNotes.find(x => x.id === id);
    setArchiveNotes(archiveNotes.filter(x => x.id !== id))
    setNotes([...notes, restore]);
   }

   function handleArchiveDelete() {
    setArchiveNotes(archiveNotes.filter(x => x.id !== archiveDetail.id)); 
  }
  
  return (
    <div className="sidebar-area">
        <div className="new-note-header">
          <h4 onClick={closeArchiveDetail}>Go back</h4>
          {archiveNotes.map(y => (
            y.id === archiveDetail.id && (
            <div className="note-flex" key={y.id}>
              <img src="/assets/images/delete-icon.svg" onClick={handleOpenModal} />
              <img src="/assets/images/archive-icon.svg" onClick={handleOpenArchiveModal} />
              <h5 onClick={closeArchiveDetail}>Cancel</h5>
              <button>Save Note</button>
              <dialog ref={archiveRef}>
              <h3>Restore Note</h3>
              <p>Are you sure you want to restrore this note? You can find it and archive it anytime.</p>
              <div className="modal-buttons">
                <button onClick={handleCloseArchiveModal}>Cancel</button>
                <button className="archive-modal-button" onClick={() => handleRestore(y.id)}>Restore Notes</button>
              </div>
          </dialog>
            </div>
            )
          ))}
        </div>

      <div className="detail">
        <h2>{archiveDetail.title}</h2>
        <div className="new-note-body">
          <div className="note-input">
            <img src="/assets/images/tag-mini.svg"/>
            <h6>Tags</h6>
            <h6 style={{color:"rgba(51, 92, 255, 1)"}}>{archiveDetail.tags}</h6>
          </div>

          <div className="note-input">
            <img src="./assets/images/loading-icon.svg"/>
            <h6>Tags</h6>
            <h6 style={{color:"rgba(51, 92, 255, 1)"}}>Archived</h6>
          </div>

          <div className="note-input">
            <img src="/assets/images/clock-icon.svg"/>
            <h6>Last edited</h6>
            <h6 style={{color:"rgba(51, 92, 255, 1)"}}>{archiveDetail.date}</h6>
          </div>
      </div>
      <hr />
        <div className="asd">
          <textarea disabled defaultValue={archiveDetail.notes}></textarea>
        </div>
        <dialog ref={dialogRef}>
          <h3>Delete Note</h3>
          <p>Are you sure you want to permanently delete this note? This action cannot be undone.</p>
          <div className="modal-buttons">
            <button onClick={handleCloseModal}>Cancel</button>
            <button onClick={handleArchiveDelete}>Delete Note</button>
          </div>
        </dialog>
      </div>
   </div>
  );
}