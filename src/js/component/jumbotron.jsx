import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron bg-light p-4">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero
                aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
            </p>
            <hr className="my-4" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
    );
};

export default Jumbotron;