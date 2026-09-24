import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">🍅</div>

        <div>
          <h2>Tomato Support</h2>
          <p>AI Customer Support</p>
        </div>
      </div>

     <div className="status">
    <span className="online-dot"></span>
    Online
</div>
    </header>
  );
}

export default Header;