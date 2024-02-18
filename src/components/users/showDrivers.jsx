import React, { useState, useEffect } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";
function ShowDrivers({backendActor}){   
    const [stories, setStories] = useState([
        { email: "douglasmahleko@gmail.com", licenseNo: "123bgf", experience: "3 years", classLicense : "2", level:'c', ratings:4 },
        { email: "douglasmahleko@gmail.com", licenseNo: "123bgf", experience: "3 years", classLicense : "2", level:'c', ratings:4 },
        { email: "douglasmahleko@gmail.com", licenseNo: "123bgf", experience: "3 years", classLicense : "2", level:'c', ratings:4 },
])
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(false); 
    const tableHeader = [
        {id:"email" , name:"Email"}, {id:"licenseNo" , name:"License No"}, {id:"experience" , name:"Experience"}, 
        {id:"classLicense" , name:"Class License"}, {id:"level" , name:"Level"}, {id:"ratings" , name:"Ratings"}
    ]
    // useEffect(() => {
    //     getCars();
    //   }, []);

    const getCars = async () => {
        try {
          const messages = await backendActor.getDriversData();
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
         header={ <SearchBar searchValue={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for Drivers" title="Our Drivers" getting={getting} /> } />
    )
}
export default ShowDrivers