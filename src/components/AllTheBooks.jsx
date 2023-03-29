import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import books from "../books/fantasy.json";
import { CardGroup } from "react-bootstrap";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class AllTheBooks extends Component {
  render() {
    return (
      <CardGroup>
        <Row lg={5}>
          {books.map((BooksCover, index) => (
            <Col key={index}>
              <Card style={{ width: "15rem", height: "35rem" }}>
                <Card.Img variant="top" style={{ height: "20rem" }} src={BooksCover.img} />
                <Card.Body>
                  <Card.Title>{BooksCover.title}</Card.Title>
                  <Card.Text>{BooksCover.price} pound</Card.Text>
                  <Button className="mb-0" variant="primary">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </CardGroup>
    );
  }
}

export default AllTheBooks;
