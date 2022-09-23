import React from 'react'

function RequestList({ requests, completeRequest, removeRequest }) {
  return (
    <div className="request-list">
      {requests.map((request, index) => (
        <Request
          key={index}
          index={index}
          request={request}
          completeRequest={completeRequest}
          removeRequest={removeRequest}
        />
      ))}
    </div>
  )
}

function Request({ request, index, completeRequest, removeRequest }) {
  return (
    <div
      className="request"
      style={{ textDecoration: request.isCompleted ? "line-through" : "" }}
    >
      {request.name || "no name"}
      Placeholder text
      {/*      {request.text} */}
      <div>
        <button onClick={() => completeRequest(index)}>Complete</button>
        <button onClick={() => removeRequest(index)}>x</button>
      </div>
    </div>
  );
}

function AddRequestForm({ addRequest }) {
  const [value, setValue] = React.useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value)
    if (!value) return;
    addRequest(value);
    setValue({});
    document.getElementById('requestForm').reset();
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const updatedValue = { [name]: value }

    setValue(previous => ({
      ...previous,
      ...updatedValue
    }));
  }

  return (
    <div className="form-contain">
      <div>
        <h1 align="center" style={{ "marginBottom": "5%" }}>Create a Service Request</h1>
      </div>
      <form id="requestForm" className="login-form" onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <label>Name</label>
          <input id="name" name="name" className="form-control" placeholder="Enter Name" onChange={handleInputChange} />
        </div>
        <div className="form-outline mb-4">
          <label>Short Description</label>
          <input id="sdescription" name="sdescription" className="form-control" placeholder="Enter Short Description" onChange={handleInputChange} />
        </div>
        <div className="form-outline mb-4">
          <label>Email Id</label>
          <input id="emailId" name="emailId" className="form-control" placeholder="Enter Email ID" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="textAreaForRequest">Service Request</label>
          <textarea className="form-control" name="ldescription" id="ldescription" rows="5" onChange={handleInputChange}></textarea>
        </div>
        <button type="button" onClick={handleSubmit} className="btn btn-primary" id="create-req-btn">Create Request</button>

      </form>
    </div>
  );
}

export { Request, AddRequestForm, RequestList }