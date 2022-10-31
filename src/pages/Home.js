import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div className="container">
          <h1>Share the world with your friends</h1>
          <p>Chat App Lets you connect with the world</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              Get Started <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home_bg"></Col>
    </Row>
  );
};

export default Home;
