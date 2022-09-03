import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppShell } from "ui";
import { MOVIES_APP_ROUTES } from "shared";

function App() {
  return (
    <AppShell
      title="Movies"
      routes={[
        {
          path: MOVIES_APP_ROUTES.home,
          element: <div>Home page content</div>,
        },
        {
          path: MOVIES_APP_ROUTES.playlist,
          element: <div>Playlist</div>,
        },
      ]}
      navLinks={[
        {
          label: "Home",
          path: MOVIES_APP_ROUTES.home,
        },
        {
          label: "Playlist",
          path: MOVIES_APP_ROUTES.playlist,
        },
      ]}
    />
  );
}

export default App;
