import React, { useState } from "react";
import { Button, Checkbox, Form, Select } from "semantic-ui-react";
import {
  updateProgram,
  loadCreatedPrograms,
} from "../../actions/customerActions";
import { useDispatch } from "react-redux";
import MultiSelect from "./MultiSelect";
import InputSelect from "./MultiInput";
const ProgramForm = ({ program, toggleModal }) => {
  const dispatch = useDispatch();
  const [title, settitle] = useState((program && program.title) || "");
  const [intro, setintro] = useState((program && program.intro) || "");
  const [detail, setdetail] = useState((program && program.detail) || "");
  const [active, setactive] = useState((program && program.active) || null);
  // const [vtr, setvrt] = useState((program && program.active) || null);
  const [isPublic, setisPublic] = useState(
    (program && program.ispublic) || null
  );

  return (
    <Form
      size="large"
      autoComplete="off"
      onSubmit={() => {
        dispatch(
          updateProgram({
            _id: program._id,
            title,
            intro,
            detail,
            active,
            isPublic,
          })
        );
        toggleModal();
        dispatch(loadCreatedPrograms());
      }}>
      <Form.Input
        fluid
        name="title"
        icon="pencil"
        iconPosition="left"
        placeholder="Enter Title"
        onChange={(event) => {
          settitle(event.target.value);
        }}
        label="Enter program title"
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
          console.log("INTRO: ", intro);
        }}
        value={intro}
        label="Is program intro ?"
      />
      <InputSelect placeholder="Enter InScope Links" />
      <InputSelect placeholder="Enter OutScope Links" />
      <InputSelect placeholder="Enter VRTs" />
      <Form.TextArea
        fluid
        name="detail"
        placeholder="Enter detail about this program"
        onChange={(event) => {
          setdetail(event.target.value);
        }}
        value={detail}
        label="Enter details about the program?"
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
        label="Is program active ?"
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
        label="Select Public/Private ?"
      />
      <Button>Update Form</Button>
    </Form>
  );
};

export default ProgramForm;
