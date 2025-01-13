import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "../styles/login.css";

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert("Login failed: " + error.message);
    } else {
      alert("Login successful!");
      window.location.href = "/";
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{" "}
        <a href="/signup" style={{ color: "#ff4a57", textDecoration: "none" }}>
          Sign up here
        </a>
      </p>
    </div>
  );
};

export default LoginPage;

