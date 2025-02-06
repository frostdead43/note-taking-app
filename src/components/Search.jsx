import { div } from "motion/react-client";
import { Fragment, useState } from "react";
 function Search({notes}) {
 const [search,setSearch] = useState('')

 function handleSearch(e) {
   setSearch(e.target.value);
   console.log(e.target.value);
 }

 const filterSearch = notes.filter(x =>  {
  const find = x.title.includes(search) || x.tags.includes(search) || x.date.includes(search);
  

  console.log(find);
  return(find);
 })


  console.log(notes);

  
  return (
    <div className="search-area">
      <h2>Search</h2>
      <input type="text" name="search" placeholder="Search..." onChange={handleSearch} />
      <p>
        All notes matching <span>"{search}"</span> are displayed below.
      </p>
      <div className="search">
        {filterSearch.length > 0 ? (
          filterSearch.map((y) => (
            <Card key={y.title} title={y.title} tags={y.tags} date={y.date} />
          ))
        ) : (
          <h5 className="notFound-text">No notes match your search. Try a different keyword or create a new note.</h5>
        )}
      </div>
    </div>
  );
} 

function Card({title, tags,date}) {
  return(
    <Fragment>
      <h3>{title}</h3>
      <h5>{tags}</h5>
      <h6>{date}</h6>
    </Fragment>
  )
}

export default Search