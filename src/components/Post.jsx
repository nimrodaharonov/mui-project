import {
	CheckBox,
	Favorite,
	FavoriteBorder,
	MoreVert,
	Share,
} from "@mui/icons-material";
import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography,
} from "@mui/material";

function Post() {
	return (
		<Card sx={{ margin: 5 }}>
			<CardHeader
				title="this is the best!"
				subheader="	Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					perferendis adipisci est? Corporis"
				avatar={<Avatar sx={{ bgcolor: "red" }}></Avatar>}
				action={
					<IconButton>
						<MoreVert />
					</IconButton>
				}
			/>
			<CardMedia
				component="img"
				height="20%"
				image="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="seagreen">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					perferendis adipisci est? Corporis, esse nisi? Consequuntur quisquam
					officia praesentium cum, vel quibusdam excepturi, delectus hic iusto
					consequatur tempore deleniti, ad eius facilis.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite color="error" />}
					/>
				</IconButton>
				<IconButton aria-label="share">
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default Post;
