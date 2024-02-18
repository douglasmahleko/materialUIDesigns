import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CommonButton from "../constants/commonButton";
import { Box, Stack, TextField, Typography } from "@mui/material";
import BasicCard from "../constants/basicCard";
import DatingBar from "../constants/datingBar";

function AddEmpsAndCars({backendActor}){
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [supervisor, setSupervisor] = useState('')
    const [status, setStatus] = useState('')
    const [tasks, setTask] = useState('')
    const [deadLine, setDeadLine] = useState('')
    const [importance, setImportance] = useState('')
    const [employee, setEmployee] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setSending(true);
          const message = {
            supervisor: supervisor,
            status: status,
            tasks: tasks,
            deadLine: deadLine,
            importance: importance,
            employee : employee
          };

          await backendActor.addEmpAndCar(message);
          setSupervisor("");
          setStatus("");
          setTask("");
          setDeadLine("");
          setImportance("");
          setEmployee("");
          setSending(true);
          navigate('/showEmpsAndCar');
        } catch (error) {
          console.log("Error on send title ", error);
          setSending(false);
        }
      };
      const getContent = () => {
        return(
          <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required error={supervisor.length===0} variant="outlined" value={supervisor} onChange={(e) => setSupervisor(e.target.value)} label="Supervisor Name" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={status.length===0} variant="outlined" value={status} onChange={(e) => setStatus(e.target.value)} label="Status" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={tasks.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={tasks} onChange={(e) => setTask(e.target.value)} label="Tasks" />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required error={deadLine.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={deadLine} onChange={(e) => setDeadLine(e.target.value)} label="Dead Line" /> */}
                <DatingBar title="Dead Line" value={deadLine} setValue={setDeadLine} sx={{ width:'60%', margin:'1%'}} />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={importance.length===0} variant="outlined" value={importance} onChange={(e) => setImportance(e.target.value)} label="Importance" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={employee.length===0} variant="outlined" value={employee} onChange={(e) => setEmployee(e.target.value)} label="Employee" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead = () => {
        return(
          <Box sx={{marginLeft:'15%', justifyContent:"center"}}>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'80%',}}></Typography>
              <Typography variant="h2"> File Employees And Duties Assigned</Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'80%'}}></Typography>
          </Box>
        )
      }
    return(
      <BasicCard header={getHead()} content={getContent()} />
    )
}
export default AddEmpsAndCars