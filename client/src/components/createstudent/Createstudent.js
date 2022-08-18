import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { TextField } from '@mui/material'
import axios from 'axios'
import Button from '@mui/material/Button'


const Createstudent = () => {
    const [student,setStudent]=useState({
        name:"",
        rollno:"",
        phoneno:Number,
        branch:""
    })

  
  const detectchange=(e)=>
  {e.preventDefault();
    setStudent({...student,[e.target.id]:e.target.value});
    console.log(student);
  }
  const addstudent=()=>
  {

    console.log(student)
    if(student.name.length==0 || student.branch.length==0 || student.phoneno.length==0 || student.rollno==0)
    {
      alert("Enter Full details")
    }
    else
    {
       axios.post("http://localhost:5000/students",student).then(()=>
    {
      window.location.reload(false);
    }).catch((err)=>{console.log(err)});
    }
   
  }
  return (
        <>
        <Container>
        <h2> Create Student </h2>
         <TextField required  sx={{mb:1,mt:1}}
           id="name"
           label="Enter Name of student"
           variant='outlined'
           color='primary'
           value={student.name}
           onChange={detectchange}
         />
          <TextField required sx={{mb:1,mt:1}}
       id="rollno"
       label="Rollno"
       variant='outlined'
       color='primary'
       value={student.rollno}
       onChange={detectchange}
     />
         <TextField required sx={{mb:1,mt:1}}
         id="phoneno"
         label="Enter phone no:"
         variant='outlined'
         color='primary'
         value={student.phoneno}
         onChange={detectchange}
       />
      
     <TextField required sx={{mb:1,mt:1}}
     id="branch"
     label="branch"
     variant='outlined'
     color='primary'
     value={student.branch}
     onChange={detectchange}
   />
   <Button variant="contained" color="primary" sx={{mb:1}} onClick={addstudent}>
     Create Student
   </Button>
   </Container>
</>
       
  )
}

export default Createstudent