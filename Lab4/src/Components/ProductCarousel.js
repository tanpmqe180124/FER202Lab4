import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = () => {
  return (
    <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="pizza1.jpg"
          alt="Pizza Margherita"
        />
        <Carousel.Caption>
          <h3>Pizza Margherita</h3>
          <p>Classic pizza with tomatoes and mozzarella cheese.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pizza2.jpg"
          alt="Pizza Margherita"
        />
        <Carousel.Caption>
          <h3>Pizza Margherita</h3>
          <p>Classic pizza with tomatoes and mozzarella cheese.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pizza3.jpg"
          alt="Pizza Margherita"
        />
        <Carousel.Caption>
          <h3>Pizza Margherita</h3>
          <p>Classic pizza with tomatoes and mozzarella cheese.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pizza4.jpg"
          alt="Pizza Pepperoni"
        />
        <Carousel.Caption>
          <h3>Pizza Pepperoni</h3>
          <p>Delicious pepperoni pizza with a rich tomato base.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pizza5.jpg"
          alt="Pizza BBQ"
        />
        <Carousel.Caption>
          <h3>Pizza BBQ</h3>
          <p>Barbecue pizza with tender chicken and smoky flavors.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;
