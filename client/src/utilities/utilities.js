export const url = {
	films: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_FILMS_KEY}&page=10`,
	imgPrefix: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
};

export function removeSpaces(input) {
	return input.split(' ').join('-').toLowerCase();
}

export function parseURlId(url) {
	let lastIndex = url.lastIndexOf('-');
	return url.slice(lastIndex + 1);
}