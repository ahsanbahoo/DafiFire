import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import officeman from '../assets/officeman.png';
import star from '../assets/star.png';


function Token() {

    return (
        <>
            <Box
                sx={{ background: '#0E3B9D' }} pt={8} pb={8}
            >
                <Container >
                    <Grid container spacing={10} alignItems="center">
                        <Grid item lg={6} md={6} sm={6}>
                            <Typography variant="h2" pt={1} color='#FF7A00'
                            >
                                Seek <Typography variant="span" color='white'>  Coin Token on Binance Blockchain</Typography>
                            </Typography>
                            <Stack direction='row' pt={3} pb={3}>

                                <img src={star} alt="" height='30' />

                                <Typography ml={3}>
                                    SEEK COIN is a BEP20 Distributed Token on the Binance Blockchain.
                                    With SEEK COIN you will earn DIVIDENDS from each transaction.
                                </Typography>


                            </Stack>

                            <Stack direction='row' pt={3} pb={3}>

                                <img src={star} alt="" height='30' />

                                <Typography ml={3}>
                                    SEEK COIN is a BEP20 Distributed Token on the Binance Blockchain.
                                    With SEEK COIN you will earn DIVIDENDS from each transaction.
                                </Typography>


                            </Stack>

                        </Grid>
                        <Grid item lg={6} md={6} sm={6} textAlign="center">
                            <img src={officeman} alt="" height='400' width="80%" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Token;