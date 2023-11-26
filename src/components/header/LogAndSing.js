import React, { useState } from "react";
import Korg from "./Korg";
import { useNavigate } from "react-router"; //olle
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
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
    const user = existingUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoggedInUser(user.username);
      setLoggedIn(true);
      alert("Inloggning lyckades!");
    } else {
      alert("Fel användarnamn eller lösenord.");
    }

    setUsername("");
    setPassword("");
  };

  const handleLogout = () => {
    setLoggedInUser("");
    setLoggedIn(false);
    setShowForm(null);
    setUsername("");
    setPassword("");
    setShowBasket(false);
  };

  const handleBasket = () => {
    if (loggedIn) {
      navigate("/korg"); //olle
    } else {
      {loggedIn === false && setShowForm('login');}
      alert("Du måste vara inloggad för att se innehållet i korgen.");
    }
  };

  function HandleXBtn (showForm){
    if (!showForm === "register" || 
      !showForm === "login") {
        document.getElementsByClassName("x-btn")[0].style.display = "none";
      }
      return (
        <button
          className="x-btn"
          title="Stäng"
          onClick={showForm ? () => setShowForm(false) : null}
        >
          <CloseIcon/>
        </button>
      );
  }

  return (
    <div className="user-settings">
      {loggedIn ? (
        <div className="valkommen">
          <p>Välkommen, {loggedInUser}!</p>
          <div className="valkommen-btn">
            <button
              className="select-btn"
              onClick={handleLogout}
              title="Logga ut"
            >
              <LogoutIcon />
            </button>
            <button 
              className="select-btn" 
              onClick={handleBasket} 
              title="Cart"
            >
              <ShoppingCartIcon />
            </button>
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
