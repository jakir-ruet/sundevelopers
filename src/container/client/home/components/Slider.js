import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../../../assets/img/Slider/1.png';
import slider2 from '../../../../assets/img/Slider/2.png';
import slider3 from '../../../../assets/img/Slider/3.png';

class Slider extends Component{
    render(){
        return(
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "blueviolet"}}>Welcome to Sun Developers</h3>
                        <p style={{color: "lightcoral"}}>A home for your digital supports...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to Sun Developers</h3>
                        <p style={{color: "lightcoral"}}>Share Your Demands to Us for Taking Services</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{color: "darkblue"}}>Welcome to Sun Developers</h3>
                        <p style={{color: "lightcoral"}}>We believe in up to date & best quality</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default Slider;