import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cardbg from '../assets/cardbackground.png'
import { Container, Typography, Button } from "@mui/material";
import no1 from '../assets/no1.png'
import no2 from '../assets/no2.png'
import no3 from '../assets/no3.png'
import no4 from '../assets/no4.png'
import no5 from '../assets/no5.png'
export function Card() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${Cardbg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "100% 100%",
                // minHeight: "100vh",
                padding: '70px 0',
                backgroundColor: "#4E55FC",
            }}
        >
            <Container maxWidth="lg" >
                <Typography variant="h4" textAlign='center'
                >
                    Here are the <Typography variant="span" color='#FF7A00' > Five entities
                    </Typography>
                    <Typography variant='h4'>
                        that create utility
                    for the <Typography variant="span" color='#FF7A00' > Seek</Typography> Coin
                    </Typography>

                </Typography>
                <Grid container textAlign='center' pt={6}>
                    <Grid item lg={4} md={4} sm={4} pt={2}>
                        <img src={no1} alt="No1 img" />
                        <Typography variant='h5'>
                            Seek Global Network
                        </Typography>
                        <Typography fount-size="20px" color='#C8CEFE' pr={2} pl={2} pb={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                color: 'white',
                                fontWeight: "bold",
                                borderRadius: "20px",
                                border: '1px solid #FF7A00',
                                background: 'transparent',
                                padding: '8px 40px',
                              
                            }}
                        >
                            Join Now
                        </Button>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} pt={2}>
                        <img src={no2} alt="No2 img" />
                        <Typography variant='h5'>
                            Seek Swap
                        </Typography>
                        <Typography fount-size="20px" color='#C8CEFE' pr={2} pl={2} pb={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                color: 'white',
                                fontWeight: "bold",
                                borderRadius: "20px",
                                border: '1px solid #FF7A00',
                                background: 'transparent',
                                padding: '8px 40px'
                            }}
                        >
                            Join Now
                        </Button>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} pt={2}>
                        <img src={no3} alt="No3 img" />
                        <Typography variant='h5'>
                            Seek Gold
                        </Typography>
                        <Typography fount-size="20px" color='#C8CEFE' pr={2} pl={2} pb={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                color: 'white',
                                fontWeight: "bold",
                                borderRadius: "20px",
                                border: '1px solid #FF7A00',
                                background: 'transparent',
                                padding: '8px 40px'
                            }}
                        >
                            Join Now
                        </Button>
                    </Grid>
                </Grid>
                <Grid container textAlign='center' pt={5}>
                    <Grid item lg={6} md={6} sm={6}>
                        <img src={no4} alt="No4 img" />
                        <Typography variant='h5'>
                            Seek Lottery
                        </Typography>
                        <Typography fount-size="20px" color='#C8CEFE' pr={5} pl={5} pb={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                color: 'white',
                                fontWeight: "bold",
                                borderRadius: "20px",
                                border: '1px solid #FF7A00',
                                background: 'transparent',
                                padding: '8px 40px'
                            }}
                        >
                            Join Now
                        </Button>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} pt={2}>
                        <img src={no5} alt="No5 img" />
                        <Typography variant='h5'>
                            Seek Shop
                        </Typography>
                        <Typography fount-size="20px" color='#C8CEFE' pr={5} pl={5} pb={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                color: 'white',
                                fontWeight: "bold",
                                borderRadius: "20px",
                                border: '1px solid #FF7A00',
                                background: 'transparent',
                                padding: '8px 40px'
                            }}
                        >
                            Join Now
                        </Button>

                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
}
