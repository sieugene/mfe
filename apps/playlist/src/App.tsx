import { PlaylistContent } from "playlist-content";
import { MOVIES_APP_ROUTES } from "shared/lib";
import { AppShell } from "ui";
import { MoviesContent } from "movies-content";
import "./App.css";

function App() {
  return (
    <AppShell
      title="Playlist"
      colorScheme="dark"
      routes={[
        {
          path: MOVIES_APP_ROUTES.home,
          element: <MoviesContent />,
        },
        {
          path: MOVIES_APP_ROUTES.playlist,
          element: <PlaylistContent />,
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
