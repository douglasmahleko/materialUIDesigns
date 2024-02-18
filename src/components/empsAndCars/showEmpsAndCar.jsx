import React, { useState } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";

function ShowEmpsAndCar({backendActor}){
    const [stories, setStories] = useState([
        {employee:"employee", supervisor:"supervisor", tasks:"tasks", status:"status", importance:"importance"},
        {employee:"employee", supervisor:"supervisor", tasks:"tasks", status:"status", importance:"importance"},
        {employee:"employee", supervisor:"supervisor", tasks:"tasks", status:"status", importance:"importance"},
    ])
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(true);
    const tableHeader = [
        {id:"employee" , name:"Employee"}, {id:"supervisor" , name:"Supervisor"}, {id:"tasks" , name:"Tasks"}, 
        {id:"status" , name:"Status"}, {id:"importance" , name:"Importance"}
    ]
    
    // useEffect(() => {
    //     getCars();
    //   }, []);

    const getCars = async () => {
        try {
          const messages = await backendActor.getEmpsAndDriversData();
          setStories(messages);
          console.log( "the messages " + messages)
          console.log( "the stories " + stories)
          setGetting(true)
        } catch (error) {
          console.log("Error on getting topics ", error);
          setGetting(false)
        }
      };
    return(
        <BasicCard content={<CreateTable data={stories} tableHeader={tableHeader} />}
         header={ <SearchBar searchValue={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for Employees working on a car" title="Duties offered" getting={getting} /> } />
    )
}
export default ShowEmpsAndCar