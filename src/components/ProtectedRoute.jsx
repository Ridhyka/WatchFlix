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
const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);


const ProtectedRoute = ({ children }) => {
  const user = supabase.auth.getUser(); // Replace with appropriate auth check

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
