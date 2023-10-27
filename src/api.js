export const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJlNDU3ZWU0MGU3NzZiMTllMjEzZGJjM2UzYTAwZCIsInN1YiI6IjYzODlkNjRkNjllYjkwMDA3YmRiYjQ3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VMC465KfRUjijF4_S0mvtrWAtzp09OaiuNP4gkOIllY",
	},
};

export const baseImgURL = "https://image.tmdb.org/t/p/w500";
export const apiGenresURL =
	"https://api.themoviedb.org/3/genre/movie/list?language=en";
export const apiGenreMoviesURL = "https://api.themoviedb.org/3/list/";
export const apiMoviesDiscover =
	"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
