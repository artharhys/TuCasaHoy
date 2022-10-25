import React from 'react'
import {Carousel} from 'react-bootstrap'
import car1 from "../img/car1.jpeg";
import car2 from "../img/car2.jpeg";
import car3 from "../img/car3.JPG";
export default function BootstrapCarousel() {
  return (
    <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={car3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={car2}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={car1}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}
