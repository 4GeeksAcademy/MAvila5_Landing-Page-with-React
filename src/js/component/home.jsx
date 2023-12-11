import React from "react";
import NavBar from "./navBar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="container mt-5 mb-5">
                <Jumbotron />
                <Cards />
            </div>
            <Footer />
        </div>
    );
};

export default Home;