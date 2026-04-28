import { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:8000/register/", {
        username,
        password
      });

      alert(res.data.message);
    } catch (err) {
  alert(err.response?.data?.error || "Error al registrar");
}
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registro</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default App;