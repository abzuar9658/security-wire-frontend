import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const ProgramForm = ({ program }) => {
  const [title, settitle] = useState(program.title || "");
  const [intro, setintro] = useState(program.intro || "");
  const [inScope, setinScope] = useState(program.inScope || []);
  const [outScope, setoutScope] = useState(program.outScope || []);
  const [invited, setinvited] = useState(program.invited || []);
  const [detail, setdetail] = useState(program.detail || "");
  const [active, setactive] = useState(program.active || null);
  const [isPublic, setisPublic] = useState(program.isPublic || null);
  const [enrolled, setenrolled] = useState(program.invited || null);

  return (
    <Form onSubmit={handleSubmit} size="large" autoComplete="off">
      <Form.Input
        fluid
        name="title"
        icon="pencil"
        iconPosition="left"
        placeholder="Enter Title"
        onChange={(event) => {
          settitle(event.target.value);
        }}
        value={title}
      />
      <Form.Input
        fluid
        name="intro"
        icon="info"
        iconPosition="left"
        placeholder="Enter Intro"
        onChange={(event) => {
          settitle(event.target.value);
        }}
        value={intro}
      />
      <Form.Input
        fluid
        name="intro"
        icon="info"
        iconPosition="left"
        placeholder="Enter Intro"
        onChange={(event) => {
          settitle(event.target.value);
        }}
        value={intro}
      />
    </Form>
  );
};

export default ProgramForm;
