import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "../styles/login.css"; // Reuse the login page styles

// Initialize Supabase client
const supabase = createClient("https://curpgfxykfjlqcovsnny.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1cnBnZnh5a2ZqbHFjb3Zzbm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjYyNjgsImV4cCI6MjA1MjEwMjI2OH0.LYIXueK8FTMopvu3qoZ2Pm72SuQgCocaesLUGZZVMuo");

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
