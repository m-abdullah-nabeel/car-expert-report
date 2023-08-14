import React from 'react'
import { Box, Container } from '@mui/material'
import Sketch from "../components/create-report/skeleton"
import Parties from '../components/create-report/parties'
import InspectionDetails from '../components/create-report/inspection-details'
import Accident from '../components/create-report/accident'
import ImageListDisplay from '../components/imagelist/imagelist'


function Contact() {
    return (
        <Container sx={{ height: '100vh' }}>
            <Sketch />
            <ImageListDisplay />
        </Container>
    )
}

export default Contact
