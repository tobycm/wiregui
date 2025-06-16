import Box from "@mui/material/Box";

import { useAppContext } from "./contexts/APIContext";

import NavDrawer from "./components/NavDrawer";
import "./css/center.css";

export default function App() {
  const {} = useAppContext();

  const drawer = NavDrawer();

  return (
    <Box>
      {drawer.button}
      {drawer.drawer}
    </Box>
  );
}
