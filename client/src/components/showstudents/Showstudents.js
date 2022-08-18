import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import Paper from '@mui/material/Paper';




const Showstudents = () => {
  const [Studentlist,setStudentlist]= useState([])

  const deletestudent = (id)=>
  {
    axios.delete(`http://localhost:5000/students/${id}`).then(()=>{
      window.location.reload(false);
    }).catch((err)=>{console.log(err)});
  }
  useEffect(()=> 
  {
    axios.get('http://localhost:5000/students').then((allstudents)=>
    {
      console.log(allstudents.data);
      setStudentlist(allstudents.data);
    })
  },[])
  Studentlist.sort();


  return (  
     <>
    <TableContainer component={Paper} >
        <Table>
            <TableHead>
               <TableCell> Name</TableCell>
               <TableCell> roll no</TableCell>
               <TableCell> phoneno</TableCell>
               <TableCell> branch</TableCell>
               <TableCell> Delete</TableCell>

            </TableHead>
            <TableBody>
              {Studentlist.length ===0 ? <h1>No users to Display </h1>:
              
                Studentlist.map((Student,key)=>(
                  
                    <TableRow key={Student.name}>
                      <TableCell>{Student.name}</TableCell>
                      <TableCell>{Student.rollno}</TableCell>
                      <TableCell>{Student.phoneno}</TableCell>
                      <TableCell>{Student.branch}</TableCell>
                      <TableCell>
                        <Button variant="text" color="primary" onClick={()=>{deletestudent(Student._id)}}>
                        Delete
                      </Button>
                      </TableCell>

                    </TableRow>
                  )
                )
                } 
         
            </TableBody>
        </Table>
    </TableContainer>
     </>
  )}

export default Showstudents;