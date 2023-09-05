import {
	Avatar,
	AvatarGroup,
	Box,
	Divider,
	ImageList,
	ImageListItem,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import { IMAGE_LIST } from "../resorces/ImageList";

const Rightbar = () => {
	return (
		<Box
			flex={2}
			p={2}
			sx={{
				display: { xs: "none", sm: "block" },
			}}>
			<Box position="fixed" width={300}>
				<Typography variant="h6" fontWeight="200">
					Online Friends
				</Typography>
				<AvatarGroup max={4}>
					<Avatar
						alt="Remy Sharp"
						src="https://gravatar.com/avatar/35bf941374a6aa8273e06ff62e262ea9?s=400&d=robohash&r=x"
					/>
					<Avatar
						alt="Travis Howard"
						src="https://gravatar.com/avatar/b2a8e491fe3770e7001651e53068c7a6?s=400&d=robohash&r=x"
					/>
					<Avatar
						alt="Cindy Baker"
						src="https://gravatar.com/avatar/aee5db82f0104791d102e4a6430bfc18?s=400&d=robohash&r=x"
					/>
					<Avatar
						alt="Agnes Walker"
						src="https://gravatar.com/avatar/9363f664fa7d5a3c69433f92a15c194b?s=400&d=robohash&r=x"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://gravatar.com/avatar/6dacc57c39da77d03714ed0d19ef24cd?s=400&d=robohash&r=x"
					/>
				</AvatarGroup>
				<Typography mt={2} mb={2} variant="h6" fontWeight="200">
					Latest Photos
				</Typography>
				<ImageList cols={3} rowHeight={100} gap={3}>
					{IMAGE_LIST.map((item) => (
						<ImageListItem key={item.title}>
							<img src={item.img} />
						</ImageListItem>
					))}
				</ImageList>
				<Typography mt={2} mb={2} variant="h6" fontWeight="200">
					Latest Conversations
				</Typography>
				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<>
									{" "}
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary">
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Summer BBQ"
							secondary={
								<>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary">
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary">
										Sandra Adams
									</Typography>
									{" — Do you have Paris recommendations? Have you ever…"}
								</>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Rightbar;
