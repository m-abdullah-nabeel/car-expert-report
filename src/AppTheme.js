import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';
import { red, blueGrey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from "@mui/material/Box"
import candles from "../src/img/bg-car-2.jpg"
// import styles from "App.css"

const theme =
    createTheme({
        palette: {
            primary: {
                main: blueGrey[800],
            },
        },
    });

function ThemedApp() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box id="bgimg" style={{
                    // backgroundImage: `url(${candles})`,
                    // backgroundSize: "cover",
                    // height: "100vh",
                    // background: "linear-gradient(335deg, rgba(240,240,240,1) 0%, rgba(180,180,168,1) 100%)"
                    // minHeight: "500px",
                    // backgroundAttachment: "fixed",
                    // backgroundPosition: "center",
                    // backgroundRepeat: "no-repeat",
                    // backgroundSize: "cover",

                    //   min-height: 500px;
                    //   /* Create the parallax scrolling effect */
                    //   background-attachment: fixed;
                    //   background-position: center;
                    //   background-repeat: no-repeat;

                }}>

                    <Box id="bg-layer" sx={{
                        // background: "linear-gradient(335deg, rgba(240,240,240,1) 0%, rgba(180,180,168,1) 100%)"
                        // backgroundColor: 'rgba(240, 240, 240, 0.6)',
                        // backgroundSize: "cover",
                        // height: "100vh",
                    }}>
                        <AppRouter />

                    </Box>
                </Box>

            </ThemeProvider >
        </>
    );
}

export default ThemedApp;
