# Athletic-Training-Website-
"name": "athletic-training-website",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 900, margin: "auto", padding: 20 }}>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1>Elite Athletic Training</h1>
        <p>Online & In-Person Training Programs</p>
        <p>
          Led by a Two-Sport College Athlete (Basketball & Baseball) with high school honors including All-Conference,
          All-Area, Times Union All-Star, and All-State in Basketball.
        </p>
      </header>

      <section style={{ marginBottom: 40 }}>
        <h2>Our Services</h2>
        <ul>
          <li>Basketball Skills Training (Group: $30/hr, One-on-One: $50/hr)</li>
          <li>Athletic Development (Speed, Strength, Power)</li>
          <li>Injury Rehab & Prevention</li>
          <li>In-Person Group Basketball Sessions (Focus on Skill & Game Translation)</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>About Me</h2>
        <p>
          I'm currently a two-sport college athlete at Oneonta (Basketball and Baseball), with three summers of training experience.
          My focus is on helping athletes improve performance, prevent injury, and develop skills that translate directly to competition.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Contact</h2>
        <p>Email me at <a href="mailto:your.email@example.com">your.email@example.com</a> to book a session or ask questions.</p>
      </section>
    </div>
  );
}<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Elite Athletic Training</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
