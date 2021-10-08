import React, { useState } from "react";
import { Button, Checkbox, Form, Select } from "semantic-ui-react";
import MultiSelect from "./MultiSelect";
import InputSelect from "./MultiInput";
const ProgramForm = ({ program }) => {
  const [title, settitle] = useState((program && program.title) || "");
  const [intro, setintro] = useState((program && program.intro) || "");
  const [detail, setdetail] = useState((program && program.detail) || "");
  const [active, setactive] = useState((program && program.active) || null);
  const [isPublic, setisPublic] = useState(
    (program && program.ispublic) || null
  );
  const [enrolled, setenrolled] = useState((program && program.invited) || []);

  return (
    <Form size="large" autoComplete="off">
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
          setintro(event.target.value);
        }}
        value={intro}
      />
      <InputSelect placeholder="Enter InScope Links" />
      <InputSelect placeholder="Enter OutScope Links" />
      <MultiSelect />
      <Form.TextArea
        fluid
        name="detail"
        placeholder="Enter detail about this program"
        onChange={(event) => {
          setdetail(event.target.value);
        }}
        value={detail}
      />
      <Form.Field
        control={Select}
        options={[
          { key: "t", text: "Active", value: true },
          { key: "f", text: "Inactive", value: false },
        ]}
        onChange={(event) => {
          event.target.value ? setactive(true) : setactive(false);
        }}
        defaultValue={active ? "Active" : "Inactive"}
        placeholder={active ? "Active" : "Inactive"}
      />
      <Form.Field
        control={Select}
        options={[
          { key: "t", text: "Public", value: true },
          { key: "f", text: "Private", value: false },
        ]}
        onChange={(event) => {
          event.target.value ? setisPublic(true) : setisPublic(false);
        }}
        defaultValue={isPublic ? "Public" : "Private"}
        placeholder={isPublic ? "Public" : "Private"}
      />
      <Form.TextArea
        fluid
        name="invited"
        placeholder="Enrolled Researchers"
        onChange={(event) => {
          setenrolled((prevState) => [event.target.value, ...prevState]);
        }}
        value={enrolled.join("\n")}
      />
    </Form>
  );
};

export default ProgramForm;
