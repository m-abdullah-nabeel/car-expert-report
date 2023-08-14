import React from 'react'
import { Box, Container } from '@mui/material'
import Sketch from "../components/create-report/skeleton"
import Parties from '../components/create-report/parties'
import InspectionDetails from '../components/create-report/inspection-details'
import Accident from '../components/create-report/accident'
import ImageListDisplay from '../components/imagelist/imagelist'


function CreateReport() {
    return (
        <Container sx={{ height: '100vh' }}>
            <Sketch />

            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ backgroundColor: 'white', border: '1px solid black', p: 1, m: 1 }}>
                    <Parties />
                </Box>
                <Box sx={{}}>
                    <Box sx={{ backgroundColor: 'white', border: '1px solid black', p: 1, m: 1 }}>
                        <InspectionDetails />

                    </Box><Box sx={{ backgroundColor: 'white', border: '1px solid black', p: 1, m: 1 }}>
                        <Accident />
                    </Box>


                </Box>
                <Box sx={{ backgroundColor: 'white', border: '1px solid black', p: 1, m: 1 }}>
                    <Parties />
                </Box>


            </Box>
        </Container>
    )
}

export default CreateReport
