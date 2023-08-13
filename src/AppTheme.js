import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';
import { red, blueGrey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from "@mui/material/Box"

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
        <ThemeProvider theme={theme}>
            <Box id="bgimg">
                <Box id="bg-layer" sx={{
                    backgroundColor: "rgba(210, 210, 210, 0.5)"
                }}>
                    <AppRouter />
                </Box>
            </Box>
        </ThemeProvider >
    );
}

export default ThemedApp;
