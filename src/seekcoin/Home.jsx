import React, {useState}  from "react";
import coin from '../assets/coin.png'
import Arrow from '../assets/Arrow.png'
import Setting from '../assets/Setting.png'
import Alram from '../assets/Alram.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
    Grid,
    Button,
    Container
} from "@mui/material";

function Home() {
  let time = new Date().toLocaleTimeString();

    const [Timer, setCtime] = useState(time);

    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCtime(time);

    }
    
    setInterval(UpdateTime, 1000)

    return (
        <>
        <Box sx={{padding:'50px 0px'}}>

        
        <Container maxWidth="xl">

            <Grid container justifyContent='space-evenly' pt={10}  >
                <Grid item lg={6} md={6}>
                    <img src={coin} alt="Coin img" />
                    <Typography variant="h6" color='#C8CEFE' pt={3}>
                        Discover the new decentralized Crypto Coin that Eexclusively fuels the
                    </Typography>
                    <Typography variant='h4' pt={3}>
                        #1
                        Passive Income Business "Seek Global Network "
                    </Typography>

                    <Typography variant='h4' mt={5} mb={5}
                        maxWidth='40%'
                        pl={7}
                        letterSpacing='1px'
                        pt={2}
                        pb={2}
                        sx={{
                            border: 'none',
                            borderRadius: '9px',
                            background: '#1F56FF', 
                            
                        }}
                    >
                        {Timer}
                    </Typography>
                </Grid>
                <Grid item lg={4} md={6}>

                    <Box padding='30px'
                        sx={{
                            border: 'none',
                            borderRadius: '15px',
                            background: '#0E3B9D'
                        }}
                    >
                        <Typography variant="h5" textAlign='center'>
                            Presale Swap <img src={Setting} alt="Setting img" /> <img src={Alram} alt="Alram img" />
                        </Typography>
                        <Typography variant="h6" color='#C8CEFE' pb='5px' textAlign='center'>
                            Trade tokens in an instant
                        </Typography>
                        <Typography variant="h6">
                            <label htmlFor="">From</label>
                            <Typography mb={5}>
                                <input type='number' min='0' style={{
                                    outline: 'none', border: 'none', borderRadius: '8px',
                                    background: '#3941A5', color: 'white', fontSize: '40px', width: '100%', padding: '5px'
                                    , boxShadow: ' 0px 0px 13px rgba(0, 0, 0, 0.25)'
                                }} />
                            </Typography >
                            <Typography textAlign='center'>
                                <img src={Arrow} alt="Coin img" height='30' />
                            </Typography>
                            <Typography mb={5} variant="h6">
                                <label htmlFor="">To</label>
                                <input type='number' min='0' style={{
                                    outline: 'none', border: 'none', borderRadius: '8px',
                                    background: '#3941A5', color: 'white', fontSize: '40px', width: '100%', padding: '5px'
                                    , boxShadow: ' 0px 0px 13px rgba(0, 0, 0, 0.25)'
                                }} />
                            </Typography >
                            <Typography textAlign='center'>
                            <Button
                                    variant="contained"
                                    sx={{
                                        fontWeight:'boild',
                                        borderRadius: "20px",
                                         color:'#fff',
                                        padding:'10px 50px'
                                      
                                    }}
                                >
                                    Buy SEEK COIN
                                </Button>
                            </Typography>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </Box>
        </>
    );
}

export default Home;








