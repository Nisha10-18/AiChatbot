import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatWindow.css";

function ChatWindow({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="chat-window">
      {/* Chat Messages */}
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          sender={msg.sender}
          text={msg.text}
        />
      ))}

      {/* AI Typing Indicator */}
      {loading && (
        <div className="message-row bot">
          <div className="avatar bot-avatar">🍅</div>

          <div className="typing-box">
            <div className="typing-text">
              Tomato is typing...
            </div>

            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}

      {/* Auto Scroll */}
      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatWindow;