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
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addRequest = text => {
    const newRequests = [...requests, { text }];
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
        <Route path="/chart" element={<RequestChart requests={requests}/>} />
        {/* add chart */}
      </Routes>
    </>
  );
}

export default App;