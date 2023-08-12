import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';
import { red, blueGrey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[700],
        },
    },
});

function ThemedApp() {
    return (
        <>
            <ThemeProvider theme={theme}
            // sx={{
            //     backgroundImage: 'url("../../../Projects/portfolio/public/images/2.jpg")',
            //     height: '100%',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat',
            //     backgroundSize: 'cover',
            // }}
            >
                <AppRouter />
            </ThemeProvider >
        </>
    );
}

export default ThemedApp;
