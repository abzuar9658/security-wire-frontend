import React, { useEffect, useState } from "react";
import { Container, Loader, Table } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { loadCreatedPrograms } from "../../actions";
import { classExpression } from "@babel/types";

const CreatedPrograms = () => {
  const programs = useSelector((state) => state.createdPrograms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCreatedPrograms());
  }, [programs.data && programs.data.data && programs.data.data.results]);

  return (
    <Container>
      <h4>All Created Programs</h4>
      {!programs.isSuccess === true ? <Loader active /> : null}
      {programs.isSuccess && (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Sr #.</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Creation Date</Table.HeaderCell>
              <Table.HeaderCell>Approval Status</Table.HeaderCell>
              <Table.HeaderCell>Visiblity</Table.HeaderCell>
              <Table.HeaderCell>Enrolled Researchers</Table.HeaderCell>
              <Table.HeaderCell>Invited Researchers</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {programs.data.program.map((program, index) => {
              return (
                <Table.Row
                  onClick={() => {
                    console.log(program._id);
                  }}
                  className="tableHover"
                >
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{program.title}</Table.Cell>
                  <Table.Cell>{program.date}</Table.Cell>
                  <Table.Cell>
                    {program.isApproved ? "Yes" : "Pending"}
                  </Table.Cell>
                  <Table.Cell>
                    {program.isPublic ? "Public" : "Private"}
                  </Table.Cell>
                  <Table.Cell>{program.enrolled.length}</Table.Cell>
                  <Table.Cell>{program.invited.length}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </Container>
  );
};

export default CreatedPrograms;
