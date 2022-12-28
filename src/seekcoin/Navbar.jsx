import React, { useState } from 'react';

import logo from '../assets/logo.png';
import bg from '../assets/Background.png';

import {
    AppBar,
    Box,
    Button,
    Container,
    Hidden,
    List,
    ListItem,
    ListItemText,
    Paper,
    Stack,
    SwipeableDrawer,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Home from "./Home";




const Navbar = () => {

    useMediaQuery("(max-width:1200px)");
    const [openDrawer, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState(open);
    };


    const list = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{ width: "240px" }}
        >
            <Box mt={-20} display="flex" justifyContent="center">
                <img width="150px" src={logo} alt="" />
            </Box>
            <List>
                <a href="/#" style={{ textDecoration: "none" }}>
                    <ListItem
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <ListItemText
                            primaryTypographyProps={{
                                sx: {
                                    textTransform: "capitalize",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    color: "#ffffff",
                                    fontFamily: "Roboto",
                                },
                            }}
                            primary="HOME"
                        />
                    </ListItem>
                </a>
                <a href="/#goals" style={{ textDecoration: "none" }}>
                    <ListItem
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <ListItemText
                            primaryTypographyProps={{
                                sx: {
                                    textTransform: "capitalize",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    color: "#ffffff",
                                    fontFamily: "Roboto",
                                },
                            }}
                            primary="OUR GOALS"
                        />
                    </ListItem>
                </a>
                <a href="/#tokenomics" style={{ textDecoration: "none" }}>
                    <ListItem
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <ListItemText
                            primaryTypographyProps={{
                                sx: {
                                    textTransform: "capitalize",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    color: "#ffffff",
                                    fontFamily: "Roboto",
                                },
                            }}
                            primary="TOKENOMICS"
                        />
                    </ListItem>
                </a>
                <a href="/#buy-nextgen" style={{ textDecoration: "none" }}>
                    <ListItem
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <ListItemText
                            primaryTypographyProps={{
                                sx: {
                                    textTransform: "capitalize",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    color: "#ffffff",
                                    fontFamily: "Roboto",
                                },
                            }}
                            primary="BUY NEXTGEN"
                        />
                    </ListItem>
                </a>
                <a href="/#giveaway" style={{ textDecoration: "none" }}>
                    <ListItem
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <ListItemText
                            primaryTypographyProps={{
                                sx: {
                                    textTransform: "capitalize",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    color: "#ffffff",
                                    fontFamily: "Roboto",
                                },
                            }}
                            primary="GIVEAWAY"
                        />
                    </ListItem>
                </a>
            </List>
            {/* <Box mb={1} display="flex" justifyContent="center">
        <Button
          variant="contained"
          sx={{
            mt: 1,
            mr: 1,
            fontSize: "15px",
            fontWeight: "bold",
            borderRadius: "4px",
            background: "linear-gradient(119.36deg, #2432B3 0%, #24B3B3 100%)",
          }}
          onClick={open}
        >
          {address
            ? address?.slice(0, 6) + "..." + address?.slice(-4)
            : "LOGIN"}
        </Button>
      </Box> */}
        </Box>
    );

    return (
        <Box sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "100% 100%",
            backgroundColor: "#4E55FC",

        }}
        >
            <AppBar position="fixed" color="transparent" elevation={0} >
                <Toolbar sx={{ justifyContent: 'space-around', paddingTop: '20px' }}>
                    <Container maxWidth="xl">
                        <Hidden lgDown>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Box>
                                    <a href="/#home" style={{ textDecoration: "none" }}>
                                        <img src={logo} alt="" />
                                    </a>
                                </Box>
                                <Box>

                                    <a href="##" style={{ textDecoration: "none", color: "white" }}>
                                        <Typography variant="h6">BUYPRESALE</Typography>
                                    </a>
                                </Box>
                                <Box>
                                    <a href="##" style={{ textDecoration: "none", color: "white" }}>
                                        <Typography variant="h6">WHITEPAPER</Typography>
                                    </a>
                                </Box>
                                <Box>
                                    <a href="##" style={{ textDecoration: "none", color: "white" }}>
                                        <Typography variant="h6">ROADMAP</Typography>
                                    </a>
                                </Box>
                                <Box>
                                    <a href="##" style={{ textDecoration: "none", color: "white" }}>
                                        <Typography variant="h6">TOKENOMICS</Typography>
                                    </a>
                                </Box>
                                <Box>
                                    <a href="##" style={{ textDecoration: "none", color: "white" }}>
                                        <Typography variant="h6">COMMUNITY</Typography>
                                    </a>
                                </Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 1,
                                        mr: 1,
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                        borderRadius: "20px",
                                        background: "#FF7A00",
                                        padding: '8px 40px',
                                        cursor: "pointer",
                                        color:'#fff'
                                    }}
                                >
                                    Connect Wallet
                                </Button>
                            </Box>


                        </Hidden>

                        <Hidden lgUp>
                            <Stack direction="row" justifyContent="space-between" width="100%">
                                <a href="/#home" style={{ textDecoration: "none" }}>
                                    <img src={logo} alt="" />
                                </a>
                                <Button onClick={toggleDrawer(true)}>
                                
                                    <MenuIcon
                  style={{
                    fontSize: "38px",
                    cursor: "pointer",
                    color: "white",
                }}
                />
                                </Button>
                            </Stack>
                            <Paper style={{ background: "#0A2444" }}>
                                <SwipeableDrawer
                                    PaperProps={{
                                        sx: {
                                            background: "#1C0D38 !important",
                                            justifyContent: "center",
                                        },
                                    }}
                                    anchor="left"
                                    open={openDrawer}
                                    onClose={toggleDrawer(false)}
                                    onOpen={toggleDrawer(true)}
                                >
                                    {list()}
                                </SwipeableDrawer>
                            </Paper>
                        </Hidden>
                    </Container>
                </Toolbar>
            </AppBar>
            <Home />

        </Box >
    );
}

export default Navbar;