const data = document.getElementById("data").value;
const json = JSON.parse(data);
const initialData = json.film; // Use consistent variable name
const modal = document.getElementById("myModal");
const btn = document.getElementById("posterImage");
const span = document.getElementsByClassName("close")[0];

const selectedResults = {};

// Loop through the initial data and transform each object
initialData.forEach((item, index) => {
    // Assuming you want to use the _id property as the key
    const key = item._id;

    // Create a new object with the desired properties
    selectedResults[key] = {
        judul: item.judul,
        tahunRilis: item.tahunRilis, // Add other properties as needed
        rating: item.rating,
        link_cover: item.link_cover,
    };
});

renderSelected(selectedResults);
btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.getElementById('searchForm').addEventListener('input', async function (event) {
    event.preventDefault();  // Prevent the default form submission behavior

    const userQuery = document.getElementById('searchFilmModal').value;

    try {
        const response = await fetch('/film/cari?search=' + encodeURIComponent(userQuery) + '&modal=true');
        if (response.ok) {
            const results = await response.json();
            renderResults(results);

            document.querySelectorAll('#searchResults input[type="checkbox"]').forEach((checkbox, index) => {
                checkbox.addEventListener('change', function () {
                    const result = results[index]; // Get the result associated with this checkbox

                    if (this.checked) {
                        if (!selectedResults[result._id]) {
                            // Checkbox is checked, add the result to the selectedResults object
                            selectedResults[result._id] = {
                                judul: result.judul,
                                tahunRilis: result.tahunRilis,
                                rating: result.rating,
                                link_cover: result.link_cover,
                            };
                        }
                    } else {
                        // Checkbox is unchecked, remove the result from selectedResults
                        delete selectedResults[result._id];
                    }
                });
            });
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:');
    }
    return false;  // Explicitly returning false to prevent form submission
});

function renderResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    const addButtonModal = document.getElementById('addButtonModal');

    // Clear previous results
    resultsContainer.innerHTML = '';
    if (results.length !== 0) {
        results.forEach(result => {
            const container = document.createElement('div'); // Create a container for the elements
            const resultElement = document.createElement('h3');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = result._id;
            checkbox.className = "form-check-input";
            const border = document.createElement('img');
            border.src = '/icon/border.svg';
            border.id = 'border';
            resultElement.textContent = result.judul + " (" + result.tahunRilis + ")";
            resultElement.id = result._id;
            resultElement.className = "ms-2 mt-2";

            // Append both checkbox and resultElement to the container
            container.appendChild(checkbox);
            container.appendChild(resultElement);

            container.style.display = 'flex';
            container.style.alignItems = 'center';

            // Append the container and the border to the resultsContainer
            resultsContainer.appendChild(container);
            resultsContainer.appendChild(border);
            repopulateSelectedFilms();
        });
        addButtonModal.style.display = 'block';
    } else {
        const resultElement = document.createElement('h3');
        const border = document.createElement('img');
        border.src = '/icon/border.svg';
        border.id = 'border';
        resultElement.textContent = "Hasil Pencarian Tidak Ditemukan";
        resultElement.id = "404";
        resultsContainer.appendChild(border);
        resultsContainer.appendChild(resultElement);
        addButtonModal.style.display = 'none';
    }
}

function renderSelected(selectedResults) {
    const selectedContainer = document.getElementById('tempAdded');

    // Clear previous results
    selectedContainer.innerHTML = '';

    for (const filmId in selectedResults) {
        const film = selectedResults[filmId];

        const posterCardElement = createPosterCardElement(film);
        selectedContainer.appendChild(posterCardElement);

        // Add delete button event listener
        const deleteButton = createDeleteButton(filmId);
        posterCardElement.appendChild(deleteButton);
    }

    const addFilmElement = document.createElement('div');
    addFilmElement.className = 'poster card';
    addFilmElement.style.width = '10rem';
    addFilmElement.setAttribute('data-toggle', 'modal');
    addFilmElement.setAttribute('data-target', '#searchModal');
    addFilmElement.innerHTML = `
<img src="/icon/tile.svg" class="card-img-top" alt="..." id="posterImage">
<div class="card-body">
    <h5 class="card-title">Tambah Film</h5>
</div>
`;
    selectedContainer.appendChild(addFilmElement);

    var btn = document.getElementById("posterImage");
    btn.onclick = function () {
        modal.style.display = "block";
    };

    repopulateSelectedFilms();
}

// Helper function to create a poster card element
function createPosterCardElement(film) {
    const posterCardElement = document.createElement('div');
    posterCardElement.className = 'poster card';
    posterCardElement.style.width = '10rem';
    posterCardElement.innerHTML = `

    <img src="https://image.tmdb.org/t/p/w220_and_h330_face${film.link_cover}"
        class="card-img-top" srcset="https://image.tmdb.org/t/p/w220_and_h330_face${film.link_cover} 2x"
        alt="${film.judul}">
    <div class="card-body">
        <h5 class="card-title two-line">${film.judul}</h5>
        <p class="card-text">
            ${film.tahunRilis} | <img src="/icon/rating.svg" class="rating">
            ${film.rating.toFixed(1)}
        </p>
    </div>

`;
    return posterCardElement;
}

function createDeleteButton(filmId) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger btn-sm mb-2';
    deleteButton.addEventListener('click', function () {
        // Remove the film from selectedResults
        delete selectedResults[filmId];
        // Render the updated selectedResults
        renderSelected(selectedResults);
    });
    return deleteButton;
}

document.getElementById('addButtonModal').addEventListener('click', function () {
    // Handle the "Tambah" button click
    renderSelected(selectedResults);
    modal.style.display = 'none';
});

function repopulateSelectedFilms() {
    for (const filmId in selectedResults) {
        const checkbox = document.querySelector(`#searchResults input[value="${filmId}"]`);
        if (checkbox) {
            checkbox.checked = true;
        }
    }
}
// Call this function after re-rendering the search results
repopulateSelectedFilms();

document.getElementById('submitButton').addEventListener('click', function () {
    // Set the value of the hidden input field to the JSON string of selectedResults
    document.getElementById('selectedResultsField').value = JSON.stringify(selectedResults);
});