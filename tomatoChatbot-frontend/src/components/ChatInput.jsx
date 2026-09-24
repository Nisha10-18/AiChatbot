import { useState } from "react";
import { FiSend } from "react-icons/fi";
import "./ChatInput.css";

function ChatInput({ onSend, loading }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim() || loading) return;

    onSend(message);
    setMessage("");
  };

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        <FiSend size={18} />
      </button>
    </form>
  );
}

export default ChatInput;