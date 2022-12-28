import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import roadmap from '../assets/roadmap.png'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent } from '@mui/lab';
import lineimg from '../assets/line.png';


const RoadMap = () => {
    return (
        <Box
            sx={{
                background: `url(${roadmap})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "100% 100%",
                padding: "50px 0",
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h5" textAlign='center'>
                    The Roadmap
                </Typography>
                <Typography textAlign='center' color="#C8CEFE" fontSize="15px" pb={5} pt={3}>

                    Our team working hardly to make archive lorem ipsum dolor sit amet, consectetur amet, consectetur adipiscing elit.
                </Typography>
                <Grid container justifyContent='center' alignItems="center"   >
                    <Grid item lg={9} sm={12}>

                        <Timeline position="alternate">
                            <TimelineItem sx={{
                                minHeight: '18vh',
                            }}
                            >
                                <TimelineSeparator>
                                    {/* <TimelineDot /> */}
                                    <Box sx={{
                                        background: 'rgb(78, 85, 251)',
                                        boxShadow: 'rgb(255 122 0) 0px 0px 0px 4px',
                                        padding: '4px 5px 5px 4px',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%'

                                    }}>
                                        <img src={lineimg} alt="" height='30px' width='30' />

                                    </Box>
                                    <TimelineConnector sx={{ width: '4px', background: 'rgb(255 122 0) ' }} />
                                </TimelineSeparator>
                                <TimelineContent>
                                <Box
                                        sx={{
                                            // width: '50%',
                                            borderRadius: '0.25em',
                                            padding: '1em',
                                            boxShadow: '0 3px #ddd',
                                            textAlign: 'center',
                                            background: 'linear-gradient(180deg, #FF7A00 0%, rgba(255, 122, 0, 0) 100%)'
                                        }}
                                    >
                                        <Typography variant="h6" >
                                            NOV 2022
                                        </Typography>
                                        <Typography fontSize="15px" color='#fff'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </Typography>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    {/* <TimelineDot /> */}
                                    <Box sx={{
                                        background: 'rgb(78, 85, 251)',
                                        boxShadow: 'rgb(255 122 0) 0px 0px 0px 4px',
                                        padding: '4px 5px 5px 4px',
                                        // width: '40px',
                                        height: '40px',
                                        borderRadius: '50%'

                                    }}>
                                        <img src={lineimg} alt="" height='30px' width='30' />

                                    </Box>
                                    <TimelineConnector sx={{ width: '4px', background: 'rgb(255 122 0) ' }} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    
                                    <Box
                                        sx={{
                                            // width: '-70%',
                                            borderRadius: '0.25em',
                                            padding: '1em',
                                            boxShadow: '0 3px #ddd',
                                            textAlign: 'center',
                                            background: 'linear-gradient(180deg, #FF7A00 0%, rgba(255, 122, 0, 0) 100%)'

                                        }}
                                    >
                                        <Typography variant="h6" >
                                            NOV 2022
                                        </Typography>
                                        <Typography fontSize="15px" color='#fff'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </Typography>
                                    </Box>
                                </TimelineContent >
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    {/* <TimelineDot  /> */}
                                    <Box sx={{
                                        
                                        background: 'rgb(78, 85, 251)',
                                        boxShadow: 'rgb(255 122 0) 0px 0px 0px 4px',
                                        padding: '4px 5px 5px 4px',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%'

                                    }}>
                                        <img src={lineimg} alt="" height='30px' width='30' />

                                    </Box>
                                    <TimelineConnector sx={{ width: '4px', background: 'rgb(255 122 0) ' }} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Box
                                        sx={{
                                            // width: '50%',
                                            borderRadius: '0.25em',
                                            padding: '1em',
                                            boxShadow: '0 3px #ddd',
                                            textAlign: 'center',
                                            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.61) 0%, rgba(0, 0, 0, 0) 100%)'

                                        }}
                                    >
                                        <Typography variant="h6" >
                                            NOV 2022
                                        </Typography>
                                        <Typography fontSize="15px" color='#fff'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </Typography>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    {/* <TimelineDot  /> */}
                                    <Box sx={{
                                        background: 'rgb(78, 85, 251)',
                                        boxShadow: 'rgb(255 122 0) 0px 0px 0px 4px',
                                        padding: '4px 5px 5px 4px',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%'

                                    }}>
                                        <img src={lineimg} alt="" height='30px' width='30' />

                                    </Box>
                                    <TimelineConnector sx={{ width: '4px', background: 'rgb(255 122 0) ' }} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Box
                                        sx={{
                                            // width: '50%',
                                            borderRadius: '0.25em',
                                            padding: '1em',
                                            boxShadow: '0 3px #ddd',
                                            textAlign: 'center',
                                            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.61) 0%, rgba(0, 0, 0, 0) 100%)'

                                        }}
                                    >
                                        <Typography variant="h6">
                                            NOV 2022
                                        </Typography>
                                        <Typography fontSize="15px" color='#fff'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </Typography>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    {/* <TimelineDot /> */}
                                    <Box sx={{
                                        background: 'rgb(78, 85, 251)',
                                        boxShadow: 'rgb(255 122 0) 0px 0px 0px 4px',
                                        padding: '4px 5px 5px 4px',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%'

                                    }}>
                                        <img src={lineimg} alt="" height='30px' width='30' />

                                    </Box>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Box
                                        sx={{
                                            // width: '50%',
                                            textAlign: 'center',
                                            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.61) 0%, rgba(0, 0, 0, 0) 100%)',
                                            borderRadius: '0.25em',
                                            padding: '1em',
                                            boxShadow: '0 3px #ddd'

                                        }}
                                    >
                                        <Typography variant="h6">
                                            NOV 2022
                                        </Typography>
                                        <Typography fontSize="15px" color='#fff'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </Typography>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                </Grid>
            </Container>
        </Box >


    )

}
export default RoadMap;
