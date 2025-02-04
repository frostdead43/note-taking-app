export default function Details({notes, openDetails}) {
  console.log(notes);
  console.log(openDetails);

  return (
   <div>
      <div className="new-note-header">
        <h4>Go back</h4>
        <div className="note-flex">
          <img src="/assets/images/delete-icon.svg"/>
          <img src="/assets/images/archive-icon.svg"/>
          <h5>Cancel</h5>
          <button>Save Note</button>
        </div>
      </div>

      {openDetails.map(y => 
      <div key={y.id} className="detail">
        <h2>{y.title}</h2>
        <div className="new-note-body">
          <div className="note-input">
            <img src="/assets/images/tag-mini.svg"/>
            <h6>Tags</h6>
            <h6 style={{color:"rgba(51, 92, 255, 1)"}}>{y.tags}</h6>
          </div>
          <div className="note-input">
            <img src="/assets/images/clock-icon.svg"/>
            <h6>Last edited</h6>
            <h6 style={{color:"rgba(51, 92, 255, 1)"}}>{y.date}</h6>
          </div>
      </div>
      <hr />
      <div className="asd">
        <textarea disabled name="" id="">
          {y.notes}
        </textarea>
      </div>
      </div>
        )}
    </div>
  )
}