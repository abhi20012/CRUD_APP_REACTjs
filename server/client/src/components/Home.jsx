import React from 'react'
import image2 from './image2.jpg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
const Home = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/all');
  }

    return(

      <div style={{width:"100vw", height:"499px"}}>
      <img style={{width: "100%", height: "100%", top:0, left:0}} alt="Image" src={image2} />
      <Stack spacing={2} direction="row" 
          style={{position:"absolute",
                  top:"50%", left:"50%", 
                  transform:"translateX(-50%)"
                  }}>
        <Button variant="contained"
          style={{background:"lightgrey",
                  color:"#000"        
          }}
          onClick = {handleClick}
        >Users</Button>
      </Stack>
    </div>

      
 )
};

export default Home;