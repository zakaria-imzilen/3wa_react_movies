import { Card, CardContent, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import { baseImgURL } from "./api";

const Movies = ({ movies }) => {
	return (
		<Grid item xs={10} sx={{ height: "100vh", overflowY: "auto" }}>
			<Grid container gap={1}>
				{movies?.length == 0 ? (
					<Skeleton />
				) : (
					movies.map((movie) => (
						<Grid item xs={12} lg={3}>
							<Card key={movie.id} sx={{ minWidth: 275 }}>
								<CardContent>
									<img
										src={`${baseImgURL + movie.backdrop_path}`}
										alt={movie.title}
										style={{ width: "100%" }}
									/>
									<Typography
										sx={{ fontSize: 14 }}
										color="text.secondary"
										gutterBottom
									>
										{movie.title}
									</Typography>
									<Typography sx={{ mb: 1.5 }} color="text.secondary">
										{movie.vote_average}
									</Typography>
									<Typography variant="body2">{movie.overview}</Typography>
								</CardContent>
							</Card>
						</Grid>
					))
				)}
			</Grid>
		</Grid>
	);
};

export default Movies;
