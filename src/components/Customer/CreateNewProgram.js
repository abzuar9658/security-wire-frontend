import React, { useState, useEffect } from "react";
import { Select, Form, Button } from "semantic-ui-react";
import InputSelect from "./MultiInput";
import { createNewProgram, clearSuccess } from "../../actions/customerActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ReactInputSelect from "react-input-select";
const CreateNewProgram = () => {
  const history = useHistory();
  const createProgram = useSelector((state) => state.createProgram);
  const dispatch = useDispatch();
  const [title, settitle] = useState("");
  const [intro, setintro] = useState("");
  const [detail, setdetail] = useState("");
  const [active, setactive] = useState(false);
  const [isPublic, setisPublic] = useState(false);
  const [inScopeLinks, setinScopeLinks] = useState([]);
  const [outScopeLinks, setoutScopeLinks] = useState([]);
  const [vrts, setvrts] = useState([]);

  const handleInScopeChange = (value) => {
    setinScopeLinks((prevState) => [...prevState, value]);
  };
  const handleOutScopeChange = (value) => {
    setinScopeLinks((prevState) => [...prevState, value]);
  };
  const handleVrtChange = (value) => {
    setvrts((prevState) => [...prevState, value]);
  };
  useEffect(() => {
    if (createProgram.isSuccess) {
      dispatch(clearSuccess());
      history.push("/");
    }
  }, [createProgram.isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title,
      intro,
      detail,
      active,
      isPublic,
    };
    dispatch(createNewProgram(body, history));
  };

  return (
    <>
      <h1>CREATE NEW PROGRAM HERE</h1>
      <Form size="large" autoComplete="off">
        <Form.Input
          fluid
          name="title"
          required={true}
          icon="pencil"
          iconPosition="left"
          placeholder="Enter Title *"
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
          placeholder="Enter Intro *"
          onChange={(event) => {
            setintro(event.target.value);
          }}
          value={intro}
          label="Enter program intro ? *"
        />
        <InputSelect
          placeholder="Enter InScope Links*"
          value={inScopeLinks}
          setValue={handleInScopeChange}
        />
        <InputSelect
          placeholder="Enter OutScope Links*"
          value={outScopeLinks}
          setValue={handleOutScopeChange}
        />
        <InputSelect
          placeholder="Enter VRTs"
          value={vrts}
          setValue={handleVrtChange}
        />
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
            { text: "Active", value: true },
            { text: "Inactive", value: false },
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
        {console.log("CREATE PROGRAMS: ", createProgram)}
        <Button
          color="green"
          onClick={(e) => handleSubmit(e)}
          loading={createProgram.isLoading}>
          Create
        </Button>
      </Form>
    </>
  );
};

export default CreateNewProgram;
