function getMovie() {
    const movie = document.getElementById("movie").value;
    alert(movie)
    console.debug(movie)
    if (!movie) {
        alert("Please enter a Movie name.");
        return;
    }

    fetch("/get_movie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movie })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById("movie-result").innerHTML = `<p style="color: red;">${data.error}</p>`;
        } else {
            document.getElementById("movie-result").innerHTML = `
                <h3>${data.Title}</h3>
            `;
        }
    })
    .catch(error => console.error("Error fetching Movie:", error));
}

function getMovieDetails() {
    const movie = document.getElementById("movie").value;
    alert(movie)
    console.debug(movie)
    if (!movie) {
        alert("Please enter a Movie name.");
        return;
    }

    fetch("/get_movie_details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movie })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById("movie-result").innerHTML = `<p style="color: red;">${data.error}</p>`;
        } else {
            document.getElementById("movie-result").innerHTML = `
                <h3>${data.MovieName}</h3>
                <p>Released Date: ${data.Released}</p>
                <p>Language: ${data.Language}</p>
            `;
        }
    })
    .catch(error => console.error("Error fetching weather:", error));
}

function getCastandCrew() {
    const movie = document.getElementById("movie").value;
    alert(movie)
    console.debug(movie)
    if (!movie) {
        alert("Please enter a Movie name.");
        return;
    }

    fetch("/get_movie_cast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movie })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById("movie-result").innerHTML = `<p style="color: red;">${data.error}</p>`;
        } else {
            document.getElementById("movie-result").innerHTML = `
                <h3>Director : ${data.Director}</h3>
                <p>Writer: ${data.Writer}</p>
                <p>Actors: ${data.Actor}</p>
            `;
        }
    })
    .catch(error => console.error("Error fetching weather:", error));
}

function getCast() {
    const movie = document.getElementById("movie").value;
    alert(movie)
    console.debug(movie)
    if (!movie) {
        alert("Please enter a Movie name.");
        return;
    }

    fetch("/get_movie_cast_only", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movie })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById("movie-result").innerHTML = `<p style="color: red;">${data.error}</p>`;
        } else {
            document.getElementById("movie-result").innerHTML = `
                <p>Actors: ${data.Actors}</p>
                <p>Plot: ${data.Plot}</p>
            `;
        }
    })
    .catch(error => console.error("Error fetching weather:", error));
}