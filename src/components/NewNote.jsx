export default function NewNote ({setOpenEditor,openEditor, notes , setNotes}) {
  function handleBack() {
    setOpenEditor(!openEditor)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData);
    formObj.id = crypto.randomUUID()
    formObj.date = new Date().toLocaleDateString("en-EN", { hour: "numeric", minute: "numeric", year: "numeric"}),
    // console.log(formObj);
    // console.log(notes);
    setNotes([formObj, ...notes]);
    console.log(notes);
    
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="new-note-area">
      <div className="new-note-header">
        <h4 onClick={handleBack}>Go back</h4>
        <div className="note-flex">
          <h5 onClick={handleBack}>Cancel</h5>
          <button>Save Note</button>
        </div>
      </div>

      <hr />

      <div className="new-note-body">
        <input className="title" required type="text" name="title" placeholder="Enter a Title..." />
        <div className="note-input">
          <img src="/assets/images/tag-mini.svg"/>
          <h6>Tags</h6>
          <input type="text" name='tags' required placeholder="Add tags separated by commas" />
        </div>
        <div className="note-input">
          <img src="/assets/images/clock-icon.svg"/>
          <h6>Last edited</h6>
          <input type="text" disabled  placeholder="Not yet saved" />
        </div>
      </div>

      <hr />

      <textarea name="notes" id="" required placeholder="Start typing your note here…"></textarea>
    </div>
  </form>
  )
}