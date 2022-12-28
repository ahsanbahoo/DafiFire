import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import coin from '../assets/coin.png';
import insta from '../assets/insta.png'
import facebook from '../assets/fb.png';
import git from '../assets/git.png';
import latter from '../assets/latter.png';
import linkdink from '../assets/linkdink.png';
import telegram from '../assets/Telegram.png';
import twitter from '../assets/twitter.png';
import Fab from '@mui/material/Fab';


function Footer() {

    return (
        <>
            <Box
                sx={{
                    background: '#111550',
                    padding: "30px 0",
                }}
            >
                <Container>
                        <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Stack direction="column">
                                    <img src={coin} alt='' width="150" />
                                    <Typography fontSize="15px" color="#fff">
                                        Believe* Share* Receive

                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} >
                                <Stack direction='row'   spacing={1} justifyContent="flex-end">
                                    <Fab size="medium" color="primary">
                                        <img src={insta} alt="" height="20" />
                                    </Fab>
                                    <Fab size="medium" color="primary" >
                                        <img src={facebook} alt="" height="22" />
                                    </Fab>
                                    <Fab size="medium" color="primary" >
                                        <img src={git} alt="" height="25" />
                                    </Fab>
                                    <Fab size="medium" color="primary" >
                                        <img src={latter} alt="" height="18" />
                                    </Fab>
                                    <Fab size="medium" color="primary" >
                                        <img src={linkdink} alt="" height="20" />
                                    </Fab>
                                    <Fab size="medium" color="primary" >
                                        <img src={telegram} alt="" height="25" />
                                    </Fab>
                                    <Fab size="medium" color="primary" >
                                        <img src={twitter} alt="" height="26" />
                                    </Fab>
                                </Stack>

                            </Grid>
                        </Grid>

                        <Box pt={4} pb={2} color='#0E6FC7'
                            sx={{
                                borderBottom: '1px solid #fff'
                            }}
                        >

                        </Box>
                        <Typography textAlign='center' pt={3} color="#9EA0B7">
                            Copyright © 2022 All rights reserved | This template is made with ❤  Mr. Ahsan Nasir
                        </Typography>
                
                </Container>
            </Box>

        </>
    );
}

export default Footer;

