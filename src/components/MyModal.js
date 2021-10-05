import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

function MyModal({ component, color, type, name }) {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        type === "link" ? (
          <Link to="">{component}</Link>
        ) : (
          <Button color={color ? color : "blue"}>
            {name ? name : component}
          </Button>
        )
      }
    >
      <Modal.Header>{component}</Modal.Header>
      <Modal.Content>{component}</Modal.Content>
    </Modal>
  );
}

export default MyModal;
