import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to="about">Click to view our about page</Link>
            <Link to="contact">Click to view our contact page</Link>
            <h1>This is the home page</h1>
        </div>
    );
}

export default Home;
