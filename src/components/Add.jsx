import {
	Avatar,
	Box,
	Fab,
	Modal,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});
const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	marginBottom: 40,
});

function Add() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip
				onClick={() => setOpen(true)}
				sx={{
					position: "fixed",
					bottom: 20,
					left: { xs: "calc(50%)", md: 30 },
				}}
				title="Delete">
				<Fab color="secondary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				onClose={() => setOpen(false)}
				open={open}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box
					width={400}
					height={280}
					p={3}
					borderRadius={5}
					bgcolor={"background.default"}
					color={"text.priamry"}>
					<Typography variant="h6" color="gray" textAlign="center">
						Create post
					</Typography>
					<UserBox>
						<Avatar
							sx={{ width: 30, height: 30 }}
							alt="Remy Sharp"
							src="https://gravatar.com/avatar/35bf941374a6aa8273e06ff62e262ea9?s=400&d=robohash&r=x"
						/>
						<Typography variant="h6" color="black" fontWeight={500}>
							jonny boy
						</Typography>
					</UserBox>
					<TextField
						sx={{ width: "100%" }}
						multiline
						rows={2}
						placeholder="whats on your mind?"
						variant="standard"
					/>
				</Box>
			</StyledModal>
		</>
	);
}

export default Add;
