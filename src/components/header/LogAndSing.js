import React, { useState } from "react";
import Korg from "./Korg";
import { useNavigate } from "react-router"; //olle
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CloseIcon from '@mui/icons-material/Close';

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(null);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const navigate = useNavigate(); //olle

  const handleRegister = () => {
    if (!username || !password) {
      alert("Fyll i både användarnamn och lösenord.");
      setUsernameError(!username);
      setPasswordError(!password);
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isUsernameTaken = existingUsers.some(
      (user) => user.username === username
    );

    if (isUsernameTaken) {
      alert("Användarnamnet är redan taget!");
      return;
    }

    const newUser = { username, password };
    const newUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(newUsers));
    alert("Registrering lyckades! Logga in för att fortsätta.");

    setUsername("");
    setPassword("");
    setShowForm("login");
  };

  const handleLogin = () => {
    if (!username || !password) {
      alert("Fyll i både användarnamn och lösenord.");
      setUsernameError(!username);
      setPasswordError(!password);
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      setLoggedIn(true);
      alert("Inloggning lyckades!");
    } else {
      alert("Fel användarnamn eller lösenord.");
    }

    setUsername("");
    setPassword("");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowForm(null);
    setUsername("");
    setPassword("");
    setShowBasket(false);
  };
  //  setShowBasket(!showBasket);
  //  window.location.href = 'http://localhost:3000/korg';

  const handleBasket = () => {
    if (loggedIn) {
      //   return;
      //   <Korg />

      navigate("/korg"); //olle
    } else {
      alert("Du måste vara inloggad för att se innehållet i korgen.");
    }
  };

  // const handleBasket = () => {
  //   if (loggedIn) {
  //     return <Korg />;
  //   } else {
  //     alert('Du måste vara inloggad för att se innehållet i korgen.');
  //     // Om du vill returnera något annat när användaren inte är inloggad kan du göra det här
  //     // Exempel: return <p>Du måste vara inloggad för att se innehållet i korgen.</p>;
  //   }
  // };

  function HandleXBtn (showForm){
    if (!showForm === "register" || 
      !showForm === "login") {
        document.getElementsByClassName("x-btn")[0].style.display = "none";
      }
      return (
        <button
          className="x-btn"
          onClick={showForm ? () => setShowForm(false) : null}
        >
          <CloseIcon/>
        </button>
      );

  }





  return (
    <div className="user-settings">
      {loggedIn ? (
        <div>
          <p>Välkommen, {username}!</p>
          <div>
            <button onClick={handleLogout}>Logga ut</button>
            <button onClick={handleBasket}>Korg</button>
          </div>
        </div>
      ) : (
        <div className="user-container">
          {showForm === "register" && (
            <div className="user-form">
              <HandleXBtn />
              <h2>Registrering</h2>
              <div className="user-input">
                <input
                  type="text"
                  placeholder="Användarnamn"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError(false);
                  }}
                />
                {usernameError && (
                  <p style={{ color: "red" }}>Fyll i användarnamn.</p>
                )}

                <input
                  type="password"
                  placeholder="Lösenord"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(false);
                  }}
                />
                {passwordError && (
                  <p style={{ color: "red" }}>Fyll i lösenord.</p>
                )}
              </div>
              <button className="submit-btn" onClick={handleRegister}>Registrera</button>
            </div>
          )}

          {showForm === "login" && (
            <div className="user-form">
              <HandleXBtn />
              <h2>Inloggning</h2>
              <div className="user-input">
                <input
                  type="text"
                  placeholder="Användarnamn"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError(false);
                  }}
                />
                {usernameError && (
                  <p style={{ color: "red" }}>Fyll i användarnamn.</p>
                )}

                <input
                  type="password"
                  placeholder="Lösenord"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(false);
                  }}
                />
                {passwordError && (
                  <p style={{ color: "red" }}>Fyll i lösenord.</p>
                )}
              </div>
              <button className="submit-btn" onClick={handleLogin}>Logga in</button>
            </div>
          )}

          <div className="select-container">
            <button className="select-btn" onClick={() => setShowForm("register")}>{/*Registrera*/}<PersonAddIcon/></button>
            <button className="select-btn" onClick={() => setShowForm("login")}>{/*Logga in*/}<VpnKeyIcon/></button>
            <button className="select-btn" onClick={handleBasket}>{/*Korg*/}<ShoppingCartIcon/></button>
          </div>
        </div>
      )}

      {showBasket && <Korg />}
    </div>
  );
};

export default App;
