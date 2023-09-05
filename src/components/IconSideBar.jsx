import { Home } from "@mui/icons-material";
import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import React from "react";

function IconSideBar({ text, icon }) {
	return (
		<ListItem disablePadding>
			<ListItemButton component="a" href="#home">
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	);
}

export default IconSideBar;
