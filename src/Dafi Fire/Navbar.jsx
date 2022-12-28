import React, { useState } from 'react';
import logo from '../assets/logo.png'

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
            sx={{ width: "240px", fontFamily: ' Roboto, sansSerif' }}
        >
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
                <a href="/#SWAP" style={{ textDecoration: "none" }}>
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
                            primary="SWAP"
                        />
                    </ListItem>
                </a>
                <a href="/#THE CREST TOKEN" style={{ textDecoration: "none" }}>
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
                            primary="THE CREST TOKEN"
                        />
                    </ListItem>
                </a>
                <a href="/#HISTORY" style={{ textDecoration: "none" }}>
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
                            primary="HISTORY"
                        />
                    </ListItem>
                </a>
                <a href="/#plus +" style={{ textDecoration: "none" }}>
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
                            primary="plus +"
                        />
                    </ListItem>
                </a>
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar position="fixed" color="transparent" elevation={0} >
                <Toolbar sx={{ justifyContent: 'space-around', paddingTop: '20px' }}>
                    <Container maxWidth="xl">
                        <Hidden lgDown>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Box display="flex" >
                                    <img src={logo} alt="" height="50" />
                                    <Typography fontSize="15px" pt={2} pl={1}>
                                        The Crest +
                                    </Typography>
                                </Box>
                                <Box>

                                    <a href="##" style={{ textDecoration: "none", color: "white" }}>
                                        <Typography variant="h6">HOME</Typography>
                                    </a>
                                </Box>
                                <Box>
                                    <a href="##" style={{ textDecoration: "none", color: "white" }}>
                                        <Typography variant="h6">SWAP</Typography>
                                    </a>
                                </Box>
                                <Box>
                                    <a href="##" style={{ textDecoration: "none", color: "white" }}>
                                        <Typography variant="h6">THE CREST TOKEN</Typography>
                                    </a>
                                </Box>
                                <Box>
                                    <a href="##" style={{ textDecoration: "none", color: "white" }}>
                                        <Typography variant="h6">HISTORY</Typography>
                                    </a>
                                </Box>
                                <Box>
                                    <a href="##" style={{ textDecoration: "none", color: "white" }}>
                                        <Typography variant="h6">PLUS +</Typography>
                                    </a>
                                </Box>
                            </Box>


                        </Hidden>

                        <Hidden lgUp>
                            <Stack direction="row" justifyContent="space-between">
                                <a href="/#home" style={{ textDecoration: "none" }}>
                                    <Box display="flex" >
                                        <img src={logo} alt="" height="50" />
                                        <Typography fontSize="13px" pt={2} pl={1}>
                                            The Crest +
                                        </Typography>
                                    </Box>
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