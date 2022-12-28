import React from "react";
import { Container, Typography, Box, Stack } from "@mui/material";
import Grid from '@mui/material/Grid';
import team1 from '../assets/team1.png.png'
import team2 from '../assets/team2.png.png'
import team3 from '../assets/team3.png.png'
import team4 from '../assets/team4.png.png'
import fb from '../assets/fborange.png'
import linkdink from '../assets/linkedinorange.png'
import twitter from '../assets/twitterorange.png'



function Leadership() {

    return (
        <>
            <Box
                sx={{
                    padding: '70px 0',
                }}
            >
                <Container>
                    <Typography variant="h4" textAlign='center'>
                        The Leadership Team
                    </Typography>
                    <Typography variant="h6" textAlign='center' fontSize='15px' pt={2} pb={3} color="#C8CEFE">
                        The ICO Crypto Team combines a passion for esports, industry experise & proven record in finance, development, marketing & licensing.
                    </Typography>
                    <Grid container pt={10} justifyContent='center'  columnSpacing={{xl:6,lg:6 ,md:6,sm:6}} rowSpacing={{md:5,sm:5,xs:7}}>
                        <Grid item lg={3} md={5}> 
                            <Box
                                sx={{
                                    border: 'none',
                                    background: '#111550',
                                    padding: '0 20px 20px 30px',
                                    borderRadius: '10px',
                                    
                                }}                                                            
                            >
                                <Box
                                    sx={{
                                        position: 'relative', left: '-50px', top: '-30px'
                                    }}
                                >
                                    <Stack direction='row' alignItems='center'>

                                        <img src={team1} alt="" height='200' style={{ borderRadius: '10px' }} />
                                        <Stack direction='column' ml={2} spacing={2}>

                                            <img src={fb} alt='' />
                                            <img src={linkdink} alt='' />
                                            <img src={twitter} alt='' />
                                        </Stack>
                                        

                                    </Stack>
                                </Box>
                                <Typography variant="h6" m='auto'>
                                    Name
                                    Harry
                                </Typography>
                                <Typography variant="h6" color="#C8CEFE">
                                    CTO & Senior
                                    Developer
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={5}>
                            <Box
                                sx={{
                                    border: 'none',
                                    background: '#111550',
                                    padding: '0 20px 20px 30px',
                                    borderRadius: '10px',
                                  
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative', left: '-50px', top: '-30px'
                                    }}
                                >
                                    <Stack direction='row' alignItems='center'>

                                        <img src={team2} alt="" height='200' style={{ borderRadius: '10px' }} />
                                        <Stack direction='column' ml={2} spacing={2}>

                                            <img src={fb} alt='' />
                                            <img src={linkdink} alt='' />
                                            <img src={twitter} alt='' />
                                        </Stack>

                                    </Stack>
                                </Box>
                                <Typography variant="h6" m='auto'>
                                    Name
                                    Jack
                                </Typography>
                                <Typography variant="h6" color="#C8CEFE">
                                    CTO & Senior
                                    Developer
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={5}>
                            <Box
                                sx={{
                                    border: 'none',
                                    background: '#111550',
                                    padding: '0 20px 20px 30px',
                                    borderRadius: '10px',
                                    
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative', left: '-50px', top: '-30px'
                                    }}
                                >
                                    <Stack direction='row' alignItems='center'>

                                        <img src={team3} alt="" height='200' style={{ borderRadius: '10px' }} />
                                        <Stack direction='column' ml={2} spacing={2}>

                                            <img src={fb} alt='' />
                                            <img src={linkdink} alt='' />
                                            <img src={twitter} alt='' />
                                        </Stack>

                                    </Stack>
                                </Box>
                                <Typography variant="h6" m='auto'>
                                    Name
                                    Alina
                                </Typography>
                                <Typography variant="h6" color="#C8CEFE">
                                    CTO & Senior
                                    Developer
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={5}>
                            <Box
                                sx={{
                                    border: 'none',
                                    background: '#111550',
                                    padding: '0 20px 20px 30px',
                                    borderRadius: '10px',
                                   
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative', left: '-50px', top: '-30px'
                                    }}
                                >
                                    <Stack direction='row' alignItems='center'>

                                        <img src={team4} alt="" height='200' style={{ borderRadius: '10px' }} />
                                        <Stack direction='column' ml={2} spacing={2}>

                                            <img src={fb} alt='' />
                                            <img src={linkdink} alt='' />
                                            <img src={twitter} alt='' />
                                        </Stack>

                                    </Stack>
                                </Box>
                                <Typography variant="h6" m='auto'>
                                    Name
                                    Tom
                                </Typography>
                                <Typography variant="h6" color="#C8CEFE">
                                    CTO & Senior
                                    Developer
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Leadership;