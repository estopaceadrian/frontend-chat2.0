import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Sidebar() {
  const rooms = ['first', 'second', 'third'];
  return (
    <>
      <h2>Sidebar</h2>
      <ListGroup on>
        {rooms.map((room, idx) => (
          <ListGroup.Item key={idx}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
      <ListGroup on>
        {rooms.map((room, idx) => (
          <ListGroup.Item key={idx}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Sidebar;
