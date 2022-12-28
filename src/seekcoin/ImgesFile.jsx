import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import latter from '../assets/latter.png';
import Phone from "../assets/Phon.png"
import Telegram from '../assets/Telegram.png'

function ImgesFile() {

    return (
        <>
            <Box
                sx={{
                    padding: '70px 0',
                    background: '#0E3B9D'
                }}
            >
                <Container maxWidth="lg" >
                    <Grid container >
                        <Grid item lg={6} md={6} sm={6} pt={5} pr={6}>
                            <Typography variant='h4'>
                                Contact Us
                            </Typography>
                            <Typography variant='h6' color="#C8CEFE" fontSize="18px" pb={2} pt={2}>
                                We are always open and we welcome and questions you have for our team.
                                If you wish to get in touch, please fill out the form below.

                            </Typography>
                            <Box display="flex" alignItems="center">
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <Fab size="medium" color='success' sx={{ border: '1px solid #FF7A00', borderRadius: '50%', background: 'transparent' }} >
                                        <img src={Phone} alt='' height="18" />

                                    </Fab>
                                </  Box>

                                <Typography variant='h6' pr={3} pl={3} >
                                    <a href="tel:+923266465676" style={{ textDecoration: "none", color: '#fff' }} > +92 3266465676</a>
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" pt={3} pb={3}>
                                <Typography
                                    sx={{
                                        textAlign: 'center',

                                    }}
                                >
                                    <Fab size="medium" color='success' sx={{ border: '1px solid #FF7A00', borderRadius: '50%', background: 'transparent' }} >
                                        <img src={latter} alt="" height="18" />
                                    </Fab>
                                </Typography>

                                <Typography variant='h6' pr={3} pl={3} >
                                    <a href="mailto:ahsanbahoo03@gmail.com" style={{ textDecoration: "none", color: '#fff' }}>ahsan03@gmail.com</a>
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Typography
                                    sx={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <Fab size="medium" color='success' sx={{ border: '1px solid #FF7A00', borderRadius: '50%', background: 'transparent' }} >
                                        <img src={Telegram} alt='' height="18" />
                                    </Fab>
                                </Typography>

                                <Typography variant='h6' pr={3} pl={3} >
                                    <a href="mailto:ahsanbahoo03@gmail.com" style={{ textDecoration: "none", color: '#fff' }}>Join us on Telegram</a>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} pt={5}>
                            <TextField fullWidth type="text" name="Name" color='success' background='#2C329D' id="Name" label="Name" autocomplete="off"
                                sx={{ background: '#2C329D' }} />
                            <TextField fullWidth type="email" name="Email" id="Email" color='success' background='#2C329D' label="Email" autocomplete="off"
                                sx={{ background: '#2C329D', margin: '30px 0px' }} />

                            <TextField fullWidth type="number" label="Phone" id="Phone" color='success' background='#2C329D' autocomplete="off"
                                sx={{ background: '#2C329D', marginBottom: '30px' }} />
                            <TextField fullWidth type='text' autocomplete="off" color='success'
                                sx={{

                                    background: '#2C329D'
                                }}

                                id="Textarea"
                                label="Message"
                                required min="5"
                                multiline
                                rows={4}

                            />
                            <Box>

                                <Button
                                    variant="contained"
                                    sx={{
                                        fontWeight: 'boild',
                                        borderRadius: "20px",
                                        color: '#fff',
                                        padding: '10px 80px',
                                        marginTop: '30px'

                                    }}
                                >
                                    Send Masseg
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    );
}

export default ImgesFile;
