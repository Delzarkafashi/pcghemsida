import React, { useState } from 'react';
import Korg from './Korg';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(null);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showBasket, setShowBasket] = useState(false);

  const handleRegister = () => {
    if (!username || !password) {
      alert('Fyll i både användarnamn och lösenord.');
      setUsernameError(!username);
      setPasswordError(!password);
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isUsernameTaken = existingUsers.some(user => user.username === username);

    if (isUsernameTaken) {
      alert('Användarnamnet är redan taget!');
      return;
    }

    const newUser = { username, password };
    const newUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(newUsers));
    alert('Registrering lyckades! Logga in för att fortsätta.');

    setUsername('');
    setPassword('');
    setShowForm('login');
  };

  const handleLogin = () => {
    if (!username || !password) {
      alert('Fyll i både användarnamn och lösenord.');
      setUsernameError(!username);
      setPasswordError(!password);
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.username === username && user.password === password);

    if (userExists) {
      setLoggedIn(true);
      alert('Inloggning lyckades!');
    } else {
      alert('Fel användarnamn eller lösenord.');
    }

    setUsername('');
    setPassword('');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowForm(null);
    setUsername('');
    setPassword('');
    setShowBasket(false);
  };

  const handleBasket = () => {
    if (loggedIn) {
      // Uppdatering: Skapa en länk till den nya sidan här
      window.location.href = 'http://localhost:3000/customerservice'; // Ändra detta till den faktiska URL:en för din nya sida
    } else {
      alert('Du måste vara inloggad för att se innehållet i korgen.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Välkommen, {username}!</p>
          <button onClick={handleLogout}>Logga ut</button>
          <button onClick={handleBasket}>Korg</button>
        </div>
      ) : (
        <div>
          {showForm === 'register' && (
            <div>
              <h2>Registrering</h2>
              <input
                type="text"
                placeholder="Användarnamn"
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                  setUsernameError(false);
                }}
              />
              {usernameError && <p style={{ color: 'red' }}>Fyll i användarnamn.</p>}

              <input
                type="password"
                placeholder="Lösenord"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
              />
              {passwordError && <p style={{ color: 'red' }}>Fyll i lösenord.</p>}

              <button onClick={handleRegister}>Registrera</button>
            </div>
          )}

          {showForm === 'login' && (
            <div>
              <h2>Inloggning</h2>
              <input
                type="text"
                placeholder="Användarnamn"
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                  setUsernameError(false);
                }}
              />
              {usernameError && <p style={{ color: 'red' }}>Fyll i användarnamn.</p>}

              <input
                type="password"
                placeholder="Lösenord"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
              />
              {passwordError && <p style={{ color: 'red' }}>Fyll i lösenord.</p>}

              <button onClick={handleLogin}>Logga in</button>
            </div>
          )}

          <div>
            <button onClick={() => setShowForm('register')}>Registrera</button>
            <button onClick={() => setShowForm('login')}>Logga in</button>
            <button onClick={handleBasket}>Korg</button>
          </div>
        </div>
      )}

      {showBasket && <Korg />}
    </div>
  );
};

export default App;
