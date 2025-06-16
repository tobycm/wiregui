import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route as RRoute, Routes } from "react-router";

import Home from "@mui/icons-material/Home";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App.tsx";
import { Route } from "./components/NavDrawer.tsx";
import AppContext from "./contexts/APIContext.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const routes: Route[] = [
  {
    name: "Home",
    path: "/",
    icon: <Home />,
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <AppContext.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <RRoute path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </QueryClientProvider>
  </StrictMode>
);
