import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import CommonButton from "../constants/commonButton";
import BasicCard from "../constants/basicCard";
import SelectBar from "../constants/selectBar";
import DatingBar from "../constants/datingBar";

function AddUser({backendActor}){
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [sex, setSex] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('')
    const [duty, setDuty] = useState('')
    const [address, setAddress] = useState('')
    const [dob, setDob] = useState('')
    const [userHistory, setUserHistory] = useState('')
    const [idNo, setIdNo] = useState('')
    const [addedBy, setAddedBy] = useState('')
    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setSending(true);
          const message = {
            title: title,
            name: name,
            surname: surname,
            sex: sex,
            contact: contact,
            email : email,
            adress:adress,
            duty:duty,
            address:address,
            dob:dob,
            userHistory:userHistory,
            idNo:idNo,
            addedBy:"addedBy"
          };
          await backendActor.addUser(message);
          setTitle("");
          setName("");
          setSurname("");
          setSex("");
          setContact("");
          setEmail("");
          setAdress("");
          setDuty("");
          setAddress("");
          setDob("");
          setUserHistory("");
          setIdNo("");
          setAddedBy("");
          setSending(true);
          navigate('/showUsers');
        } catch (error) {
          console.log("Error on send title ", error);
          setSending(false);
        }
      };
      const getContent = () => {
        return(
          <Box sx={{marginLeft:'10%', justifyContent:"center"}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required error={idNo.length===0} variant="outlined" value={idNo} onChange={(e) => setIdNo(e.target.value)} label="User Id Number" />
                <SelectBar title="Title" value={title} sx={{ width:'60%', margin:'1%'}} onChange={setTitle} values={['Mr', 'Mrs', "Miss"]} />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={name.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={name} onChange={(e) => setName(e.target.value)} label="user first name" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={surname.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={surname} onChange={(e) => setSurname(e.target.value)} label="user last name" />
                <SelectBar title="Sex" value={sex} sx={{ width:'60%', margin:'1%'}} onChange={setSex} values={['Male', 'Female']} />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={contact.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={contact} onChange={(e) => setContact(e.target.value)} label="user contact" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={email.length===0} variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="user email" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={adress.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={adress} onChange={(e) => setAdress(e.target.value)} label="user physical adress" />
                <SelectBar title="Duty" value={duty} sx={{ width:'60%', margin:'1%'}} onChange={setDuty} values={['Driver', 'Accountants', 'Logistics']} />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required error={dob.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={dob} onChange={(e) => setDob(e.target.value)} label="user date of birth" /> */}
                <DatingBar title="Date And Time" value={dob} setValue={setDob} sx={{ width:'60%', margin:'1%'}} />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={userHistory.length===0} variant="outlined" value={userHistory} onChange={(e) => setUserHistory(e.target.value)} label="User History" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead = () => {
        return(
          <Box sx={{marginLeft:'28%', justifyContent:"center"}}>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'35%',}}></Typography>
              <Typography variant="h2"> Add New User</Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'35%'}}></Typography>
          </Box>
        )
      }
    return(
      <BasicCard header={getHead()} content={getContent()} />
    )
}
export default AddUser