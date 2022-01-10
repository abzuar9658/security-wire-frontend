import React, { useState, useEffect } from "react";
import { Input, Button, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getCreatedScans, scanProgram } from "../../../actions/customerActions";
import { useHistory } from "react-router";
import MaterialTable from "material-table";
const columns = [
  { title: "URL", field: "url" },
  { title: "Date Created", field: "date" },
  { title: "Status", field: "status" },
  { title: "Logs", field: "log" },
];

const Scanner = () => {
  const [data, setdata] = useState([]);
  const [url, seturl] = useState("");
  const [urlError, seturlError] = useState();
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const createdScans = useSelector((state) => state.createdScans);
  useEffect(() => {
    if (!localStorage.getItem("token")) history.push("/login");
  }, []);

  useEffect(() => {
    if (!createdScans.isSuccess) {
      dispatch(getCreatedScans());
    } else {
      const dataLocal =
        createdScans.data.Scan &&
        createdScans.data.Scan.map((data) => ({
          url: data.url,
          date: new Date(data.date).toDateString(),
          logs: data.logs,
          status: data.status,
        }));
      setdata(dataLocal);
    }
  }, [createdScans]);
  const isValidUrl = () => {
    const r = new RegExp(
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    );
    const isValid = r.test(url);
    console.log("IS VALID:", url, isValid);
    if (isValid) {
      seturlError(undefined);
      return true;
    }
    seturlError("Invalid url, please try again!");
    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidUrl()) return;
    setloading(true);
    dispatch(scanProgram(url)).then((res) => {
      setloading(false);
    });
  };
  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}>
        Welcome to Security Wire Automated Scanning
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center", margin: "3em" }}>
        <Input
          icon="searchengin"
          size="massive"
          placeholder="Enter url to scan"
          style={{ marginRight: "1em" }}
          onChange={(e) => seturl(e.target.value)}
        />
        <Button loading={loading} disable={loading} color="blue">
          Scan Now
        </Button>
      </form>
      {urlError && (
        <h3 style={{ color: "red", textAlign: "center" }}>{urlError}</h3>
      )}
      <br />
      <MaterialTable
        columns={columns}
        data={data.reverse()}
        title="Your Scans"
        style={{ widht: "80%", height: "50vh", overflow: "scroll" }}
        options={{
          pageSize: 4,
          emptyRowsWhenPaging: false, // To avoid of having empty rows
        }}
      />
    </div>
  );
};

export default Scanner;
