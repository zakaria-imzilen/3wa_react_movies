import { Button, Grid } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { apiGenreMoviesURL, apiGenresURL, options } from "./api";
import { toast } from "react-toastify";

const Aside = ({ setMovies }) => {
	const [categories, setCategories] = useState([]);
	// In the FIRST LOADING (1ST TIME & ONE TIME) of the component
	// I need to fetch the API for the categories

	useEffect(() => {
		fetch(apiGenresURL, options)
			.then((resp) => resp.json())
			.then((data) => {
				setCategories(data?.genres);
			})
			.catch((err) => {
				if (err instanceof Error) {
					toast.error("Something went wrong " + err.message);
				} else {
					console.log(err);
					toast.error("Something went wrong");
				}
			});
	}, []);
	// this empty dependency array will guarantee
	// a one time load of data

	const handleBtnClick = useCallback((categoryId) => {
		// Fetch category movies
		fetch(`${apiGenreMoviesURL + categoryId}`, options)
			.then((resp) => resp.json())
			.then((data) => {
				if (data?.items?.length == 0) {
					toast.warn("Category has no movies");
					return;
				}
				setMovies(data?.items);
				toast.success("Movies generated successfuly");
			})
			.catch((err) => {
				if (err instanceof Error) {
					toast.error("Something went wrong " + err.message);
				} else {
					console.log(err);
					toast.error("Something went wrong");
				}
			});
	}, []);

	return (
		<Grid
			item
			xs={2}
			sx={{ height: "100vh" }}
			paddingY={2}
			paddingX={1}
			overflow="auto"
		>
			<Grid container gap={1}>
				{categories.map((category) => (
					<Grid xs={12} item key={category.id}>
						<Button
							onClick={() => {
								handleBtnClick(category.id);
							}}
							fullWidth
							variant="contained"
							color="info"
						>
							{category.name}
						</Button>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default Aside;
