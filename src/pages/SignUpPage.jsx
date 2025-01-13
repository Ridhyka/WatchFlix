import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "../styles/login.css"; // Reuse the login page styles

// Initialize Supabase client
const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Sign-Up failed: " + error.message);
    } else {
      alert("Sign-Up successful! Please log in.");
      window.location.href = "/login"; // Redirect to login after successful registration
    }
  };

  return (
    <div className="login-container">
      <h1>Sign Up</h1>
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
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
        Already have an account?{" "}
        <a href="/login" style={{ color: "#ff4a57", textDecoration: "none" }}>
          Log in here
        </a>
      </p>
    </div>
  );
};

export default SignUpPage;
