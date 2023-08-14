import React from 'react'
import { Box, Paper, Tab, Tabs, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function Sketch() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event) => {
        setValue(event);
    };

    const navigate = useNavigate()

    return (
        <Box >
            <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", mt: 2, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <Box onClick={() => navigate('/create-report')} sx={{
                    maxWidth: 150, p: 1, borderBottom: "2px solid"
                }}>
                    <Typography variant='body2' sx={{ textAlign: 'center' }}>Accident and Participants</Typography>
                </Box>
                <Box sx={{
                    maxWidth: 150, p: 1, borderBottom: "2px solid"
                }}>
                    <Typography variant='body2' sx={{ textAlign: 'center' }}>Vehicle Selection</Typography>
                </Box>
                <Box sx={{
                    maxWidth: 150, p: 1, borderBottom: "2px solid"
                }}>
                    <Typography variant='body2' sx={{ textAlign: 'center' }}>Vehicle Condition</Typography>
                </Box>
                <Box onClick={() => navigate('/contact')} sx={{
                    maxWidth: 150, p: 1, borderBottom: "2px solid"
                }}>
                    <Typography variant='body2' sx={{ textAlign: 'center' }}>Photos</Typography>
                </Box>
                <Box sx={{
                    maxWidth: 150, p: 1, borderBottom: "2px solid"
                }}>
                    <Typography variant='body2' sx={{ textAlign: 'center' }}>Market Value Determination</Typography>
                </Box>
                <Box sx={{
                    maxWidth: 150, p: 1, borderBottom: "2px solid"
                }}>
                    <Typography variant='body2' sx={{ textAlign: 'center' }}>Local Residual Value Distributor</Typography>
                </Box>
                <Box sx={{
                    maxWidth: 150, p: 1, borderBottom: "2px solid"
                }}>
                    <Typography variant='body2' sx={{ textAlign: 'center' }}>Print Report</Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default Sketch