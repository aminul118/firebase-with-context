import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/route";
import AuthProvider from "./providers/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        future={{
          v7_startTransition: true,
        }}
        router={route}
      />
    </AuthProvider>
  </StrictMode>
);
