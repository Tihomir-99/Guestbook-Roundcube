import React, { useState } from "react";
import { postMessage } from "../api";

const MessageForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // 'sending', 'success', 'failed'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setStatus("failed");
      return;
    }

    if (name.trim().length > 50 || message.trim().length > 1000) {
      setStatus("failed");
      return;
    }

    setIsSubmitting(true);
    setStatus("sending");

    try {
      await postMessage(name, message);
      setStatus("success");
      setName("");
      setMessage("");
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isSubmitting}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
          required
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        Post
      </button>
      <div style={{ marginTop: "10px" }}>
        {status === "sending" && <p>Sending...</p>}
        {status === "success" && <p style={{ color: "green" }}>Message posted!</p>}
        {status === "failed" && <p style={{ color: "red" }}>Failed to send message, message or name field can not be empty.</p>}
      </div>
    </form>
  );
};

export default MessageForm;
