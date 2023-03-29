import Nav from "react-bootstrap/Nav";

const MyNav = props => (
  <Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <Nav.Link href="/home">{props.first}</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-1">{props.second}</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-2">{props.third}</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default MyNav;
