import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardText from "react-bootstrap/esm/CardText";
import { useState } from "react";

function Login() {
  const [a, setA] = useState(false);

  const lin = (e) => {
    e.preventDefault();
    setA(!a);
  };

  return (
    <>
      <button onClick={lin}>Login</button>
      {a ? (
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))", marginTop: "1rem" }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.androiddeveloper.co.in/blog/wp-content/uploads/2017/01/4-Best-Weather-Forecast-APIs-for-Development-of-Weather-Apps.jpeg" height={100} />
            <Card.Body>
              <Card.Title>WEATHER API</Card.Title>
              <CardText>To see the temperature and pressure at different locations, tap on the "See more" button below.</CardText>
              <Button variant="primary">
                <Link to={"/Weather"} style={{ color: "#fff", textDecoration: "none" }}>See more</Link>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.printwand.com/blog/media/2012/01/ultimate-guide-to-your-product-launch.jpg" height={100} />
            <Card.Body>
              <Card.Title>PRODUCT API</Card.Title>
              <CardText>To see different products and details, tap on the "See more" button below.</CardText>
              <Button variant="primary">
                <Link to={"/products"} style={{ color: "#fff", textDecoration: "none" }}>See more</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <p>Please login first</p>
      )}
    </>
  );
}

export default Login;
