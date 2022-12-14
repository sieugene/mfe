import {
  AppShell as MantineAppShell,
  Header,
  MantineProvider,
  MantineTheme,
  Navbar,
  Title,
  Text,
} from "@mantine/core";
import * as React from "react";
import {
  BrowserRouter,
  Outlet,
  PathRouteProps,
  Route,
  Routes,
} from "react-router-dom";
import { MainLink, NavLink } from "./MainLink";

import { useStore } from "store";

export type Route = Pick<PathRouteProps, "path" | "element">;

export const AppShell: React.FC<
  { title: string; routes: Route[]; navLinks: NavLink[] } & Partial<
    Pick<MantineTheme, "colorScheme">
  >
> = ({ title, routes, colorScheme = "light", navLinks }) => {
  const { movies } = useStore();
  return (
    <BrowserRouter>
      <MantineProvider
        theme={{ fontFamily: "Open Sans", colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <MantineAppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 300 }} height={500} p="xs">
              {navLinks.map((link) => (
                <MainLink key={link.path} {...link} />
              ))}
            </Navbar>
          }
          header={
            <Header height={60} p="xs" sx={{ display: "flex" }}>
              <Title style={{ flexGrow: 1 }}>{title}</Title>
              <Text size="xl">{movies.length} selected</Text>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
          <Outlet />
        </MantineAppShell>
      </MantineProvider>
    </BrowserRouter>
  );
};
