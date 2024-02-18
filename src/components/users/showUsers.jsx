import React, { useState } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";
function ShowUsers({backendActor}){
    const [stories, setStories] = useState([
        {name:"name",surname:"surname",email:"email",idNo:"idNo",contact:"contact",title:"title",sex:"sex",
            dob:"dob",duty:"duty",userHistory:"userHistory",address:"address",addedBy:"addedBy"},
        {name:"name",surname:"surname",email:"email",idNo:"idNo",contact:"contact",title:"title",sex:"sex",
            dob:"dob",duty:"duty",userHistory:"userHistory",address:"address",addedBy:"addedBy"},
        {name:"name",surname:"surname",email:"email",idNo:"idNo",contact:"contact",title:"title",sex:"sex",
            dob:"dob",duty:"duty",userHistory:"userHistory",address:"address",addedBy:"addedBy"},
])


    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(true);
    const tableHeader = [
        {id:"name", name:"Name"},{id:"surname", name:"Surname"},{id:"email", name:"Email"},{id:"idNo", name:"IdNo"},
        {id:"contact", name:"Contact"},{id:"title", name:"Title"},{id:"sex", name:"Sex"},{id:"dob", name:"Dob"},
        {id:"duty", name:"Duty"},{id:"userHistory", name:"User History"},{id:"address", name:"Address"},{id:"addedBy", name:"Added By"}]
                        // useEffect(() => {
                        //     getCars();
                        //   }, []);
                    
                        const getCars = async () => {
                            try {
                              const messages = await backendActor.getUsersData();
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
         header={ <SearchBar searchValue={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for Users" title="System Users" getting={getting} /> } />
    )
}
export default ShowUsers