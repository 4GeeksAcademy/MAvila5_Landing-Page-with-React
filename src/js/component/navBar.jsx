import React from "react";

const NavBar = () => {
    return (
        <div class="container pb-5 mb-5">
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-3 fixed-top justify-content-end">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
