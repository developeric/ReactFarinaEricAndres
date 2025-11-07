import { useState } from "react";
import Login from "./Components/Login";
import { Register } from "./Components/Registro";


export default function App() {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser("");
  };
  return (
    <>
      <h1>Hola de nuevo {user}</h1>
      <Login onLogin={handleLogin} />
      <button className="logout" onClick={handleLogout}>LOGOUT</button>
      <Register />
    </>
  );
}
