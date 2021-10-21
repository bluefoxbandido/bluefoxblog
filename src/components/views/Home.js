import React from 'react';
import Carousel from 'bootstrap';

export default function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <h5 className="display-1">
                    <span className="blue">{`(`}</span>
                    <span className="red">{`bluefox`}</span>
                    <span className="blue">{`)`}</span>
                    <span className="white">{`=>`}</span>
                    <span className="blue">{'{'}</span>
                    <span className="red">{`dev`}</span>
                    <span className="blue">{`}`}</span>
                </h5>
                <h6 className="h6">Creative Writing and Web Development Portfolio</h6>
                <div className="homeCards">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Front End Design</h5>
                                        <p className="card-text">Responsive design structure using React and Bootstrap.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Back End Design</h5>
                                        <p className="card-text">API built using Express.js, utilizing MongoDB to create a complementary database object. Built to be consumed by front end products.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Single Page Application</h5>
                                        <p className="card-text">Lightweight, all inclusive web application. Perfect for small projects!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Wordpress Design</h5>
                                        <p className="card-text">Website built using the Wordpress design system, generally marketed towards eCommerce web applications.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Mobile Development</h5>
                                        <p className="card-text">Beautiful mobile application built using React Native.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Web to App</h5>
                                        <p className="card-text">Upgrade outdated web applications to a more mobile centric society.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Gaming Partner</h5>
                                        <p className="card-text">Complimentary party addition and cooperative team mate. Support roles preferred.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

