import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from 'react-bootstrap';
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";


const Header = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <>
       {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" md={6} sm={6} sticky="top">
          <Container fluid style={{minHeight: '100px'}}>
            <Navbar.Brand href="#">
              <Image
                src="clinique_logo.png"
                rounded
                className="main-logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{justifyContent: 'flex-end'}}>
                <Nav md={6} sm={6}>
                  <Nav.Link href="#action1" style={{marginRight: '273px;'}} className="me-5 nav-font">New</Nav.Link>
                  <Nav.Link href="#action1" style={{marginRight: '273px;'}} className="me-5 nav-font">Clinique iD</Nav.Link>
                  <Nav.Link href="#action1" style={{marginRight: '273px;'}} className="me-5 nav-font">Best Sellers</Nav.Link>
                  
                  <NavDropdown
                    title="ShopAll"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    
                    className="nav-font"
                    
                    
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1" style={{marginRight: '273px;'}} className="me-2"><Image src="bag.png" style={{width: '23px'}}/>{count ? <span style={{border: '1px solid',borderRadius: '9px',fontSize:'17px',background:'red',color:'#fff'}}>{count}</span>: null}</Nav.Link>
                  <Nav.Link href="#action1" style={{marginRight: '273px;'}} ><Image src="search.png" style={{width: '23px'}}/></Nav.Link>

                
                </Nav>
           
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    
    
    
    </>
  )
}

export default Header