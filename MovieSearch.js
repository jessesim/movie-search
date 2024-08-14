$(document).ready(function() {
    $('#searchForm').on('submit', function(e) {
        e.preventDefault();
        let searchText = $('#searchText').val();
        getMovies(searchText);
    });

    function getMovies(searchText) {
        $.ajax({
            url: 'https://www.omdbapi.com/?i=tt3896198&apikey=b1cae950&s=' + searchText, 
            method: 'GET',
            success: function(response){
                let movies = response.Search;
                let output = '';
                $.each(movies, function(index, movie){
                    output += `
                    <div class="movie">
                    <img src="${movie.Poster}" alt="${movie.Title}">
                    <h2>${movie.Title}</h2>
                    <p>${movie.Year}</p>
                    </div>
                    `;
                });
                $('#movies').html(output);
            },
            error: function(){
                $('#movies').html('<p>An error has occured</p>');
            }
        });
    }
});