import * as React from "react";
import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineTheme,
  MantineProvider,
} from "@mantine/core";
export const AppShell: React.FC<
  { title: string } & Partial<Pick<MantineTheme, "colorScheme">>
> = ({ title, colorScheme = "light" }) => {
  return (
    <MantineProvider
      theme={{ fontFamily: "Open Sans", colorScheme }}
      withGlobalStyles
      withNormalizeCSS
    >
      <MantineAppShell
        padding="md"
        header={
          <Header height={60} p="xs" sx={{ display: "flex" }}>
            <Title>{title}</Title>
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
        <div>hello</div>
      </MantineAppShell>
    </MantineProvider>
  );
};
