import React from "react";
import "./App.css";
import { AddRequestForm, RequestList } from './components/ServiceRequest'
import Nav from './components/Navbar'
import RequestChart from "./components/Chart";
import {
  Routes,
  Route
} from "react-router-dom";

function Landing() {
  return (
    <>
      Welcome to our awesome 311 app.
    </>
  )
}

function App() {
  const [requests, setRequests] = React.useState([
    {
      emailId: "chris@nolights.here",
      ldescription: "The lights on my block are all out. Please fix them.",
      name: "Chris",
      sdescription: "light out"
    },
    {
      emailId: "tejas@needs.trashcans",
      ldescription: "Please give me some trash cans.",
      name: "Tejas",
      sdescription: "no garbage cans"
    },
    {
      emailId: "i@need.sleep",
      ldescription: "My neighbors are jackhammering all day and all night. Please make them stop.",
      name: "Tired",
      sdescription: "neighbors make too much noise"
    }
  ]);

  const addRequest = (element) => {
    const newRequests = [...requests, element];
    setRequests(newRequests);
  };

  const completeRequest = index => {
    const newRequests = [...requests];
    newRequests[index].isCompleted = true;
    setRequests(newRequests);
  };

  const removeRequest = index => {
    const newRequests = [...requests];
    newRequests.splice(index, 1);
    setRequests(newRequests);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list" element={
          <RequestList completeRequest={completeRequest} removeRequest={removeRequest} requests={requests} />
        } />
        <Route path="/add" element={<AddRequestForm addRequest={addRequest} />} />
        <Route path="/chart" element={<RequestChart requests={requests} />} />
        {/* add chart */}
      </Routes>
    </>
  );
}

export default App;