import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import appRoutes from "./Routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRoutes} />
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
