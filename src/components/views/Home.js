import React from 'react';
import Carousel from 'bootstrap';

export default function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <h5 class="display-1">
                    <span className="blue">{`(`}</span>
                    <span className="red">{`bluefox`}</span>
                    <span className="blue">{`)`}</span>
                    <span className="white">{`=>`}</span>
                    <span className="blue">{'{'}</span>
                    <span className="red">{`dev`}</span>
                    <span className="blue">{`}`}</span>
                </h5>
                <h6 class="h6">Creative Writing and Web Development Portfolio</h6>
                <div className="homeCards">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 class="card-title">One</h5>
                                        <p class="card-text">Brief description of card in paragraph form.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 class="card-title">Two</h5>
                                        <p class="card-text">Brief description of card in paragraph form.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 class="card-title">Three</h5>
                                        <p class="card-text">Brief description of card in paragraph form.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 class="card-title">Four</h5>
                                        <p class="card-text">Brief description of card in paragraph form.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 class="card-title">Five</h5>
                                        <p class="card-text">Brief description of card in paragraph form.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 class="card-title">Six</h5>
                                        <p class="card-text">Brief description of card in paragraph form.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 class="card-title">Seven</h5>
                                        <p class="card-text">Brief description of card in paragraph form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

