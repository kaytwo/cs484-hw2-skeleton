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
      {request.text}
      <div>
        <button onClick={() => completeRequest(index)}>Complete</button>
        <button onClick={() => removeRequest(index)}>x</button>
      </div>
    </div>
  );
}

function AddRequestForm({ addRequest }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addRequest(value);
    setValue("");
  };

  return (
    <div className="form-contain">
    <div>
        <h1 align="center" style={{"marginBottom": "5%"}}>Create a Service Request</h1>
    </div>
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
    </div>
  );
}

export { Request , AddRequestForm , RequestList}