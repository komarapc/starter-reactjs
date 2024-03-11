import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import ReduxProvider from "./redux/Provider";
import { NextUIProvider } from "@nextui-org/react";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <Suspense>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </Suspense>
    </ReduxProvider>
  </React.StrictMode>
);
