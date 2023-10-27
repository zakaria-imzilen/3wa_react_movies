import { useEffect, useState } from "react";
import Aside from "./Aside";
import Movies from "./Movies";
import { Grid } from "@mui/material";
import { apiMoviesDiscover, options } from "./api.js";
import { toast } from "react-toastify";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(apiMoviesDiscover, options)
			.then((resp) => resp.json())
			.then((data) => {
				toast.success("Movies generated successfuly");
				setMovies(data.results);
				console.log(data);
			})
			.catch((err) => {
				toast.error("Something went while generating discovery movies");
			});
	}, []);

	return (
		<Grid container>
			<Aside setMovies={setMovies} />
			{/* render category buttons */}
			{/* once a button got a click -> fetch movies corresponding to that category */}
			{/* render the movies in the main component */}
			<Movies movies={movies} />
		</Grid>
	);
}

export default App;
