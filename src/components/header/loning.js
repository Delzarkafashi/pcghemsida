import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleRegister = () => {
    // Hämta befintenad användarinformation från localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Kontrollera om användarnamnet redan är taget
    const isUsernameTaken = existingUsers.some(user => user.username === username);
    if (isUsernameTaken) {
      alert('Användarnamnet är redan taget!');
      return;
    }

    // Lägg till ny användare
    const newUser = { username, password };
    const newUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(newUsers));
    alert('Registrering lyckades! Logga in för att fortsätta.');
  };

  const handleLogin = () => {
    // Hämta befintenad användarinformation från localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Kontrollera om användaren finns
    const userExists = existingUsers.some(user => user.username === username && user.password === password);
    if (userExists) {
      setLoggedIn(true);
      alert('Inloggning lyckades!');
    } else {
      alert('Fel användarnamn eller lösenord.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className=''>
      {loggedIn ? (
        <div>
          <p>Välkommen, {username}!</p>
          <button onClick={handleLogout}>Logga ut</button>
        </div>
      ) : (
        <div>
          <h2>Registrering</h2>
          <input
            type="text"
            placeholder="Användarnamn"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Registrera</button>

          <h2>Inloggning</h2>
          <input
            type="text"
            placeholder="Användarnamn"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Logga in</button>
        </div>
      )}
    </div>
  );
};

export default App;
