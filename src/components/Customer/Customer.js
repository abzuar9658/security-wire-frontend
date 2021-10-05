import React from "react";
import CreatedPrograms from "./CreatedPrograms";
import { Button, Container } from "semantic-ui-react";

// Customer' tasks:
// View all created Programs
// Create new Programs
// Update Programs
// Invite Researcher to a Programs
// Delete Programs

// TODO: Cusomter
const Customer = ({ name }) => {
  return (
    <Container>
      <br />
      <h1 className="centered">Customer Dashboard</h1>
      <h2>Welcome {name}</h2>
      <CreatedPrograms />
      <br />
      <Button primary>Create new Program</Button>
    </Container>
  );
};

export default Customer;
