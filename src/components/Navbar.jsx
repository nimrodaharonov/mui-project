import styled from "@emotion/styled";
import { Notifications, Pets } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
	backgroundColor: "blueviolet",
	color: "white",
});
const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	gap: "20px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: { display: "flex" },
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "10px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: { display: "none" },
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					Nimrod Dev
				</Typography>
				<Pets sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="search..." />
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<MailIcon />
					</Badge>
					<Badge badgeContent={2} color="error">
						<Notifications />
					</Badge>
					<Avatar
						onClick={() => setOpen(true)}
						sx={{ width: 30, height: 30 }}
						src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					/>
				</Icons>
				<UserBox>
					<Avatar
						onClick={() => setOpen(true)}
						sx={{ width: 30, height: 30 }}
						src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					/>
					<Typography>Nimrod</Typography>
				</UserBox>
				<Menu
					onClose={() => setOpen(false)}
					open={open}
					anchorOrigin={{ horizontal: "right", vertical: "top" }}
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}>
					<MenuItem>option 1</MenuItem>
					<MenuItem>option2</MenuItem>
					<MenuItem>otphon3</MenuItem>
				</Menu>
			</StyledToolbar>
		</AppBar>
	);
};

export default Navbar;
