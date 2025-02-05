import { div } from "motion/react-client"

export default function Tags({notes}) {
  return(
    <div className="tag-area">
       <h2>Tags</h2>
       <div className="tag">
        <img src="./assets/images/tag-icon.svg"/>
        <h6>xd</h6>
       </div>
       <div className="tag">
        <img src="./assets/images/tag-icon.svg"/>
        <h6>xd</h6>
       </div>
       <div className="tag">
        <img src="./assets/images/tag-icon.svg"/>
        {notes.map(x => (
          <div key={x.id}>
            <h6>{x.tag}</h6>
          </div>
        ))}
        
       </div>
    </div>
   
    
  )
}