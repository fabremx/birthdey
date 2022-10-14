import React, { useState, useEffect } from 'react';
import './App.css';

export function App() {
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    window.swObservable.next(true);
    if (window.swObservable) {
      window.swObservable.subscribe((hasUpdate: boolean) => setHasUpdate(hasUpdate));
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React 2</h1>
      </header>

      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>

      {hasUpdate ? (
        <p className="sw-notification">Une mise à jour est disponible. Veuillez rafraîchir l'application.</p>
      ) : (
        <p className="sw-notification">L'application est maintenant en cache et prête à être utilisée hors ligne.</p>
      )}
    </div>
  );
}
