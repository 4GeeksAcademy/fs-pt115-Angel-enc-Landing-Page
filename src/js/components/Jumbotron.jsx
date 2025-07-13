import React from "react";

export const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5 text-center">
                <h1 className="display-5 fw-bold">¡Bienvenido a la aventura!</h1>
                <p className="col-md-8 mx-auto fs-4">
                    Explora los mejores juegos de rol con la saga Baldur's Gate.
                </p>
                <button className="btn btn-warning btn-lg" type="button">
                    <i className="bi bi-controller me-2"></i> ¡Empieza tu aventura!
                </button>
            </div>
        </div>
    );
};