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
              <h3>Primera foto</h3>
              <p>Ame</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={car2}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Segunda foto</h3>
              <p>Ame</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={car1}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Tercera foto</h3>
              <p>
                Ame
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}
