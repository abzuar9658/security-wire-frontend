import React, { useState } from "react";
import CreatedPrograms from "./CreatedPrograms";
import { Button, Container } from "semantic-ui-react";
import MyModal from "../MyModal";
import { useHistory } from "react-router-dom";

//TODO Customer' tasks:
//TODO//View created Programs
//TODO: Create new Programs -validation -multiselect
//TODO: Update Programs
//TODO: Invite Researcher to a Programs
//TODO: Delete Programs

const Customer = ({ name }) => {
  const history = useHistory();
  return (
    <Container>
      <br />
      <h1 className="centered">Customer Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => history.push("/createProgram")} color="green">
          Create New Program
        </Button>
      </div>
      <h2>Welcome {name}</h2>
      <CreatedPrograms />
      <br />
    </Container>
  );
};

export default Customer;
