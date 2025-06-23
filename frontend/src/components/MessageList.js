import React from "react";

const MessageList = ({ messages }) => {
    if(!messages.length)
        return <p>No messages yet.</p>;

    return (
    <ul>
      {messages.map((msg) => (
        <li key={msg.id}>
          <strong>{msg.name}</strong> wrote: "{msg.message}"<br />
          <small>{new Date(msg.created_at).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  );
};

export default MessageList