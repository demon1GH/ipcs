import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src="https://cdn.discordapp.com/attachments/1256279490934472745/1320349009331753022/ipcs.jpg" className="home-logo" alt="IPCS Logo" />
        <h1>Welcome to IPCS</h1>
        <p>Intelligence Protection Cyber Security</p>
      </header>
      <section className="d3mon-section">
        <img src="C:/Users/hardi/OneDrive/Pictures/pdp.png" className="d3mon-logo" alt="D3M0N Logo" />
        <h2>D3M0N</h2>
        <p>Developer and Cyber Security Expert</p>
      </section>
      <section className="themes-section">
        <h2>Our Topics</h2>
        <ul>
          <li>OSINT</li>
          <li>Multitool</li>
          <li>Hacking</li>
          <li>Discord</li>
          <li>And many more...</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
