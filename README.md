# AngularJS Test
A simple development test using AngularJS.

## Quick start
Clone the repo, install the dependencies (`npm install`) and run `npm start`.

Go to [http://localhost:8080](http://localhost:8080) in your browser to view the app.

## Test instructions
You're required to build an AngularJS Movies app, which receives a movie name from the user, searches it using OMDB API, and display the results in a filterable and sortable table.

### Steps:

1. When the app is loaded, display a search box and a search button.

2. When the user enters search term and clicks the button, the app should search for the term in OMDB API (http://www.omdbapi.com/).

   Use the following API key: BanMePlz
   Example usage, searching for 'transformers': http://www.omdbapi.com/?apikey=BanMePlz&s=transformers

3. The search box and button should disappear, and a table should appear with the data from the API.

   Columns to display:
     - Title (also a link to IMDB)
     - Poster (show the image)
     - Year

4. The table columns 'Title' and 'Year' should be sortable (by clicking on the headers)

5. Above the table there should be the following filters:
     - 'Title' - filter movies that *contains* the search query
     - 'Released After' - filter movies that their year is greater or equal to the given year.
     
   The filtering is done on the API results. Don't send another API request (should be client-side)


### BONUS question:

Add a 'more details' column to the table.

When clicked, get the full movie's detail from OMDB API (see their documentation), expand the movie's row and show the extra details (plot, actors, director, awards, rating, imdbRating) in 'details view' (not as table view)
