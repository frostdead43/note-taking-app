import { div, h3 } from "motion/react-client"
import Details from "./Details";
import { useState } from "react";

export default function Tags({notes}) {

  const [tagDetail, setTagDetail] = useState(false);
  const [collect , setcollect] = useState([])
  
  // always repeat yourself

  function handleCollect(tags) {
    const filter = notes.filter(z => z.tags === tags)
    setcollect(filter)
   console.log(filter);
  }

  function handleChangeDetailPage() {
    
  }
 
//  console.log(notes);
  return(
    <div className="tag-area">
       <h2>Tags</h2>
        {notes?.map(x => (
            <div className="tag">
              <img src="./assets/images/tag-icon.svg"/>
            <div key={x.id}>
              <h6 onClick={() => handleCollect(x.tags)}>{x.tags}</h6>
          </div>
        </div>
        ))}


      <div className="tag-detail">
        <h2>Notes Tagged: <span>{collect[0]?.tags}</span></h2>
        <p>All notes with the <span style={{textDecorationLine: "underline", fontWeight: "bolder"}}>{collect[0]?.tags}</span> tag are shown here.</p>
        {collect.map (x => (
          <div className="detail-tag">
            <h3>{x.title}</h3>
            <h6>{x.tags}</h6>
            <h5>{x.date}</h5>
          </div>
        ))}
      </div>   
    </div>
    
  )
}