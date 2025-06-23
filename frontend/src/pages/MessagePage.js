import React from "react";
import MessageForm from "../components/MessageForm";

const MessagePage = () => {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Leave a Message</h2>
      <MessageForm />
    </div>
  );
};

export default MessagePage;
