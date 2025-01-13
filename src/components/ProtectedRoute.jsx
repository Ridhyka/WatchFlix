// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { supabase } from "../supabaseClient"; // Adjust the import path

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const user = supabase.auth.user();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default ProtectedRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import supabase from "../supabaseClient"; // Adjust the path to your supabaseClient
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://curpgfxykfjlqcovsnny.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1cnBnZnh5a2ZqbHFjb3Zzbm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjYyNjgsImV4cCI6MjA1MjEwMjI2OH0.LYIXueK8FTMopvu3qoZ2Pm72SuQgCocaesLUGZZVMuo");


const ProtectedRoute = ({ children }) => {
  const user = supabase.auth.getUser(); // Replace with appropriate auth check

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
