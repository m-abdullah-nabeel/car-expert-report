import { CheckBox } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import CheckboxListSecondary from "../components/home/datalist";

function Home() {
    return (
        <Container>
            <CheckboxListSecondary />
            {/* <Link to="about">Click to view our about page</Link>
            <Link to="contact">Click to view our contact page</Link>
            <h1>This is the home page</h1> */}
        </Container>
    );
}

export default Home;
