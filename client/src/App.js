import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Navbar from './components/navbar/Navbar.js';
import { makeStyles, MenuItem, Grid, Paper } from '@mui/material';
import Showstudents from './components/showstudents/Showstudents.js';
import { Box } from '@mui/system';
import Createstudent from './components/createstudent/Createstudent.js';


function App() {
  return (
    <>
         <Container   maxWidth="lg">
           <Navbar/>
          <Grid container spacing={5} > 
            <Grid item xs={12}  lg={6}>
            <Typography  variant="h3" color="inherit" sx={{p:10}}> show students</Typography>
              <Box> <Showstudents/></Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Typography variant="h3" color="inherit" sx={{p:10}}> Form will be here</Typography>
                <Box component={Paper}>
                <Typography variant="h6" color="initial" sx={{ml:20}}><Createstudent/></Typography>
                </Box>
                </Grid>
          </Grid>
       </Container>
       </>
  );
}

export default App;
