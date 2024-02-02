import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
function App() {
  const [setShow] = useState(true);

  
  return (
    <div className="App">
      {/* creating a navbar  */}
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* creating first card */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://jamaity.org/wp-content/uploads/2022/05/gomycode.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    {/* a heading */}
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
{/* second card */}
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEKRYxqfVZY66u-JA4kIOdjKt_Fi1tRc0JhDUT3JUPA&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
{/* last card */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/png;base64,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"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </div>
  );
  
}

export default App;
