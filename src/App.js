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
          <li>In-Person Group Basketball Sessions</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>About Me</h2>
        <p>
          Two-sport college athlete at Oneonta (Basketball & Baseball). Three summers of training experience. Focused on
          skill development, athleticism, and injury rehab.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: your-email@example.com</p>
        <p>Phone: (Your phone number)</p>
      </section>
    </div>
  );
}
