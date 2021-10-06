import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ProgramForm from "./Customer/ProgramForm";
function MyModal({ component, header, data, color, type, name, size }) {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <Modal
      closeOnDimmerClick={false}
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Button color={color} size={size}>
          {header}
        </Button>
      }
      open={open}
      size="tiny"
    >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        {component === "programform" ? <ProgramForm program={data} /> : null}
      </Modal.Content>
      <Modal.Actions>
        <Button
          content={header}
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default MyModal;
