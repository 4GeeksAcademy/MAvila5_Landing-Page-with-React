// Cards.jsx

import React from "react";

const Cards = () => {
    return (
        <div className="card-deck row mb-4 mt-5">
            {[1, 2, 3, 4].map((index) => (
                <div className="col-md-3" key={index}>
                    <div className="card">
                        <img
                            src={`image-${index}.jpg`}  // Replace with your actual image URLs
                            className="card-img-top"
                            alt={`Card ${index}`}
                        />
                        <hr className="my-4" />
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h5 className="card-title text-center mb-3">Card title {index}</h5>
                            <p className="card-text text-center mb-3">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit, quidem a dolores eius quas culpa sapiente earum voluptate, numquam laboriosam quod. Mollitia iusto amet earum quisquam quae accusamus inventore?
                            </p>
                            <hr className="my-4" />
                            <a href="#" className="btn btn-primary align-self-center">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
