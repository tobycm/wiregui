import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import { routes } from "../main";

import logo from "../assets/wiregui.svg";

export interface Route {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

export default function NavDrawer() {
  const [open, setOpen] = useState(false);

  return {
    drawer: (
      <Drawer open={open} onClose={() => setOpen(false)}>
        <img src={logo} alt="wiregui logo" style={{ width: "64px", height: "auto", padding: "16px" }} />

        <List>
          {routes.map((route) => (
            <ListItem key={route.path} disablePadding>
              <ListItemButton>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    ),
    button: (
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    ),
    toggleDrawer: () => setOpen(!open),
    isOpen: open,
    setOpen,
  };
}
