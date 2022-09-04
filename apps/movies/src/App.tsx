import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppShell } from "ui";
import { MOVIES_APP_ROUTES } from "shared/lib";
import { MoviesContent } from "shared/ui";

function App() {
  return (
    <AppShell
      title="Movies"
      routes={[
        {
          path: MOVIES_APP_ROUTES.home,
          element: <MoviesContent />,
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
