import {
	Home,
	Pages,
	Groups,
	Shop2,
	Person,
	Settings,
	AccountBox,
	ModeNight,
} from "@mui/icons-material";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from "@mui/material";
import IconSideBar from "./IconSideBar";

const sidebarIcons = [
	{ text: "Homepage", icon: <Home /> },
	{ text: "Pages", icon: <Pages /> },
	{ text: "Groups", icon: <Groups /> },
	{ text: "Marketplace", icon: <Shop2 /> },
	{ text: "Friends", icon: <Person /> },
	{ text: "Settings", icon: <Settings /> },
	{ text: "Profile", icon: <AccountBox /> },
];

const Sidebar = ({ setMode, mode }) => {
	return (
		<Box
			flex={1}
			p={2}
			sx={{
				display: { xs: "none", sm: "block" },
			}}>
			<Box position="fixed">
				<List>
					{sidebarIcons.map((item) => (
						<IconSideBar key={item.text} text={item.text} icon={item.icon} />
					))}
					<ListItem>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<ModeNight />
							</ListItemIcon>
							<Switch
								onChange={() => setMode(mode === "light" ? "dark" : "light")}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
