import { Box, Button, Container, TextField } from "@mui/material"

const AccessControl = () => {
    return (
        <Container>
            <Box sx={{ height: '100vh', width: '100%', display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                <Box sx={{
                    backgroundColor: 'white', height: '40vh', p: 5, display: 'flex', alignItems: "center", flexDirection: 'column'
                }}>
                    <TextField id="standard-basic" label="Username" variant="standard" sx={{ mb: 1 }} />
                    <br />
                    <TextField id="standard-basic" label="Password" variant="standard" sx={{ mb: 1 }} />
                    <br />
                    <Button variant="contained" sx={{ alignSelf: 'center' }}>Login</Button>
                    <Box sx={{ alignItems: 'center', justifyContent: "center", display: "flex", flexDirection: "column", m: 3 }}>
                        <sub>Forgot Password</sub>
                        <sub>Create New Account</sub>
                    </Box>

                </Box>
            </Box>
        </Container>
    )
}

export default AccessControl