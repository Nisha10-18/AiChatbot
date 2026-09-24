import "./ChatMessage.css";

function ChatMessage({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div className={`message-row ${isUser ? "user" : "bot"}`}>
      {!isUser && (
        <div className="avatar bot-avatar">
          🤖
        </div>
      )}

      <div className={`message ${isUser ? "user-message" : "bot-message"}`}>
        <p>{text}</p>
      </div>

      {isUser && (
        <div className="avatar user-avatar">
          👤
        </div>
      )}
    </div>
  );
}

export default ChatMessage;