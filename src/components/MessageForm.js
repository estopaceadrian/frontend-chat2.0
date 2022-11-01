import React from 'react';
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap';
import './MessageForm.css';

const MessageForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <div className="message-output"></div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <FormGroup>
              <Form.Control
                type="text"
                placeholder="Your message"
              ></Form.Control>
            </FormGroup>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{ width: '100%', backgroundColor: 'orange' }}
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default MessageForm;
