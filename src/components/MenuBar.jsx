import { createContext, useState , useEffect, Fragment } from "react"
import { AnimatePresence, motion } from "framer-motion";
import Archive from "./Archive";
import { getPage } from "../js/helper";
import Settings from "./Settings";
import Search from "./Search";
import Tags from "./Tags";
import Sidebar from "./Sidebar";
import NewNote from './NewNote'

export default function MenuBar() {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  

 
  const routes = [
    {
      url:'/',
      component: <Sidebar archiveNotes = {archiveNotes} setArchiveNotes = {setArchiveNotes} notes={notes} setNotes={setNotes} />
    },
    {
      url:'/Archive',
      component:<Archive archiveNotes={archiveNotes} setArchiveNotes = {setArchiveNotes} notes={notes} setNotes={setNotes}/>
    },
    {
      url:'/Search',
      component: <Search notes={notes}/>
    },
    {
      url:'/Settings',
      component:<Settings />
    },
    {
      url:'/Tags',
      component: <Tags  notes={notes}/>
    },
   
    
  ];
  

  const PageContext = createContext(null)
  const [url,setUrl] = useState(location.hash.substring(1) || '/')
  // console.log(location.hash);
  
  useEffect(() => {
    const handleHashChange = () => {
      setUrl(location.hash.substring(1));
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const page = getPage(routes,url);

  const pageVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
  }; 
  
  return(
   <Fragment>
   <div className="menu-bar">
    <a href="#/Sidebar"><button><img src="./assets/images/home-icon.svg"/></button></a>
    <a href="#/Search"><button><img src="./assets/images/search-icon.svg"/></button></a>
    <a href="#/Archive"><button><img src="./assets/images/archive-icon.svg"/></button></a>
    <a href="#/Tags"><button><img src="./assets/images/tag-icon.svg"/></button></a>
    <a href="#/Settings"><button><img src="./assets/images/setting-icon.svg"/></button></a>
   </div>
    <PageContext.Provider value={page}>
    <AnimatePresence mode="wait">
          <motion.div key={url} variants={pageVariants }initial="initial" animate="animate" exit="exit">
            {page.component}
          </motion.div>
        </AnimatePresence>
    </PageContext.Provider>
   </Fragment>
  )
}