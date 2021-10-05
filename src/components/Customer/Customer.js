import React from "react";
import CreatedPrograms from "./CreatedPrograms";
import { Button, Container } from "semantic-ui-react";

//TODO Customer' tasks:
//TODO//View all created Programs
//TODO: Create new Programs
//TODO: Update Programs
//TODO: Invite Researcher to a Programs
//TODO: Delete Programs

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
