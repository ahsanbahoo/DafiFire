import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import office from '../assets/office.png';
import coin from '../assets/coin.png';
import Aboutline from '../assets/aboutline.png';

function About() {

    return (
        <>
            <Box
                sx={{ background: '#0E3B9D' }} pt={8} pb={8}
            >
                <Container>
                    <Grid container alignItems="center"  >
                        <Grid item lg={6} md={6} sm={6} textAlign="center">
                            <img src={office} alt="" height='400' width="70%" />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6}>
                            <img src={coin} alt="" />
                            <Box padding='20px 0 0'>
                                <img src={Aboutline} alt="" />
                            </Box>
                            <Typography variant="h2" pt={1}
                            >
                                By Holding  <Typography variant="span" color='#FF7A00' >Seek</Typography> Coin
                            </Typography>
                            <Typography variant="h6" pt={3} pb={3}>
                                By holding SEEK COIN in your wallet, you WILL earn DIVIDENDS from each transaction.
                                Our system automatically distributes the DIVIDENDS to the holder’s WALLET, as well as
                                creates liquidity and an automatic burn per transaction.
                            </Typography>

                            <Box>

                                <Button
                                    variant="contained"
                                    sx={{
                                        fontWeight:'boild',
                                        borderRadius: "20px",
                                         color:'#fff',
                                        padding: '10px 80px',
                                      
                                    }}
                                >
                                    Buy Seek Coin
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default About;