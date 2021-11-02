import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useSelector, useDispatch } from "react-redux";
import {
  getSecurityResearchers,
  inviteResearchers,
} from "../../actions/customerActions";
const animatedComponents = makeAnimated();

export default function InviteResearchers({ programId, toggleModal }) {
  console.log("PROGRAM ID INVITATION", programId);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const researchers = useSelector((state) => state.inviteResearchers);
  let selectedResearchers = [];
  useEffect(() => {
    dispatch(getSecurityResearchers())
      .then((res) => {
        console.log("RESPONSE: ", res);
        let optionsLocal = res.users.map((user) => ({
          value: user._id,
          label: user.name.charAt(0).toUpperCase() + user.name.slice(1),
        }));
        setOptions([...optionsLocal]);
      })
      .catch((err) => console.error(err.message));
  }, []);
  const handleChange = (e) => {
    selectedResearchers = e.map((event) => event.value);
  };
  const handleSubmit = () => {
    if (selectedResearchers.length > 0) {
      dispatch(inviteResearchers({ users: selectedResearchers }, programId));
      toggleModal();
    }
  };
  return (
    <form onSubmit={toggleModal}>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        options={options}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button color="green" type="submit" onClick={handleSubmit}>
          Invite Researchers
        </Button>
      </div>
    </form>
  );
}
