import { CheckBox } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import CheckboxListSecondary from "../components/home/datalist";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <Container>
            <CheckboxListSecondary />
            {/* <Link to="about">Click to view our about page</Link>
            <Link to="contact">Click to view our contact page</Link>
            <h1>This is the home page</h1> */}
            <AddCircleIcon onClick={() => navigate('/create-report')} sx={{ position: "fixed", bottom: 10, right: 20, fontSize: 40, color: "rgba(250, 250, 250, 0.9)" }} />
        </Container>
    );
}

export default Home;
