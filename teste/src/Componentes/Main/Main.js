import React from 'react';
import './Main.css';
import sandals from './sandals.png'

function Main(props) {
    return (
        <div className="compras">
            <div className="container">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div id="carrousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={sandals} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={sandals} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img class="d-block w-100" src={sandals} alt="Third slide" />
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="secaodecompra">
                <h1>RASTEIRA TIRA DEDO</h1>
                <p>RT 0568 | 03.07.0653</p>
                <p>R$69 | R$55,20</p>
            </div>
        </div>

    )
}

export default Main