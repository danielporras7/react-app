import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My App!</h1>
      </header>

      <div className="banner">
        <h2>My name is Daniel</h2>
        <p>Welcome to my first React App!</p>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Page 1: Home Page</h3>
          <p>The Current page!</p>
        </div>
        <div className="feature-card">
          <h3>Page 2: TicTacToe</h3>
          <p>A  React TicTacToe Game</p>
        </div>
        <div className="feature-card">
          <h3>Page 3: Api</h3>
          <p>Demsontration of using API's in React</p>
        </div>
      </div>

      <footer className="home-footer">
        <p>
          <strong></strong> 
        </p>
        <p>
          <strong></strong> 
        </p>
        {}
      </footer>
    </div>
  );
}

export default Home;
