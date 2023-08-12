import { Container } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Container>
            <Link to="about">Click to view our about page</Link>
            <Link to="contact">Click to view our contact page</Link>
            <h1>This is the home page</h1>
        </Container>
    );
}

export default Home;
