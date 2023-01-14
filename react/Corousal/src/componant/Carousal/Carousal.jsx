import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export function CarouselCom() {
    return (
        <Carousel>
            <div>
                <img src="https://media.proprofs.com/images/QM/user_images/1911057/9867752090.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://vistapointe.net/images/jam-3.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://media.proprofs.com/images/QM/user_images/1911057/9867752090.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
}