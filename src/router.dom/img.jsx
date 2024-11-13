
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Img() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://plus.unsplash.com/premium_photo-1661777702966-aed29ab4106b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWF0aW5nfGVufDB8fDB8fHww" alt="img1"  height={"100%"} width={"100%"}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://plus.unsplash.com/premium_photo-1682430745677-5b2508aa8c8c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fHww" alt="img2" height={"100%"} width={"100%"}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://media.istockphoto.com/id/1053271298/photo/feast.jpg?s=612x612&w=0&k=20&c=1wrgrUZzf0C7m0S6jKzajkbg2SwWXafwBY91XUzUOhc=" alt="img3" height={"100%"} width={"100%"}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Img;
