import React from 'react';
import Logo from 'src/Components/Icons/Logo';

export default function DefaultPage({ children }) {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1 className="App-title">React Whiteboard</h1>
      </header>
      {children}
    </div>
  );
}
