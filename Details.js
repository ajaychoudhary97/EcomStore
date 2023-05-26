import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from '../../features/addToCart/addToCartSlice';
const Details = () => {
    
    const [counter, setCounter] = useState(1);
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  
  
  return (
    <>
      <Container>
        <Row className="d-flex">
          <Col md={6} style={{ display: "flex", justifyContent: "center" }}>
            <div className="product1">
              <Image src="foundation_image.png" />
            </div>
          </Col>
          <Col md={6}>
            <Row>
              <span>Makeup / Foundations</span>
            </Row>
            <Row>
              <h4 style={{ fontSize: "22px", fontWeight: "640" }}>
                Even Better Glow Light Refelecting Makeup
              </h4>
            </Row>
            <Row>
              <h4 style={{ fontSize: "22px", fontWeight: "640" }}>
                Broad Spectrum SPF 15
              </h4>
            </Row>
            <Row>
              <p style={{ fontSize: "13px" }}>
                Moderate-coverage foundation instantly perfects,improves
                evenness of skin
              </p>
            </Row>
            <Row>
              <Image src="rating-4.png" style={{ width: "190px" }} />
            </Row>
            <div>
              <Row className="row-gap1">
                <Col className="benefit">
                  <b>Benefits</b>
                </Col>
                <Col className="gapfin">
                  <b>Finish</b>
                </Col>
              </Row>
              <Row className="row-gap2">
                <Col style={{ fontSize: "14px" }}>
                  Glow and natural radiance, SPF
                </Col>
                <Col className="gapfin">Radiant</Col>
              </Row>
              <Row className="row-gap1">
                <Col className="benefit">
                  <b>Coverage</b>
                </Col>
                <Col className="gapfin">
                  <b>Key Ingredients</b>
                </Col>
              </Row>
              <Row className="row-gap2">
                <Col className="benefit">Sheer to Moderate</Col>
                <Col style={{ fontSize: "13px" }} className="gapfin">
                  Coralander Seed, Black Pepper, Patchouli <a href="#">More</a>
                </Col>
              </Row>
            </div>

            <Row className="row-gap3">
              <Button className="wn-btn">
                <div className="btn-inside">
                  <h5 className="wn">WN 04</h5>
                  <div className="rectangle"></div>
                </div>
              </Button>
            </Row>

            <Row className="row-gap4">
              <hr />
            </Row>
            <Row>
              <Col>
                <b>Quantity</b>{" "}
                <a
                  onClick={() => setCounter(counter - 1)}
                  className="lesscount"
                >
                  <Image src="minus.png" />
                </a>
                <span>{counter}</span>
                <a
                  onClick={() => setCounter(counter + 1)}
                  className="lesscount"
                >
                  <Image src="plus.png" />
                </a>
              </Col>
              <Col>
                <b>One Time Purchase</b>
              </Col>
            </Row>
            <Row className="row-gap5">
              <Col>
                <b>$29.00</b>
              </Col>
              <Col>
                <Button className="addtobag" onClick={()=> dispatch(increment())}>Add To Bag</Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="row-gap5">
          <div>
            <hr />
          </div>
        </Row>
        <Row className="row-gap2">
          <h4>Works well with</h4>
        </Row>

        <div className="g-4 row row-cols-md-4 row-cols-1">
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="foundation_image_bk.png" />
              <div className="card-body">
                <div className="card-title h5">
                  Turnaround Overnight Moisturizer
                </div>
                <p className="card-text">$42.00</p>
                <div>
                  <Button className="addtocart">Add To Cart</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="foundation_image_bk.png" />
              <div className="card-body">
                <div className="card-title h5">
                  Turnaround Overnight Moisturizer
                </div>
                <p className="card-text">$42.00</p>
                <div>
                  <Button className="addtocart">Add To Cart</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="foundation_image_bk.png" />
              <div className="card-body">
                <div className="card-title h5">
                  Turnaround Overnight Moisturizer
                </div>
                <p className="card-text">$42.00</p>
                <div>
                  <Button className="addtocart">Add To Cart</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="foundation_image_bk.png" />
              <div className="card-body">
                <div className="card-title h5">
                  Turnaround Overnight Moisturizer
                </div>
                <p className="card-text">$42.00</p>
                <div>
                  <Button className="addtocart">Add To Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Details;
