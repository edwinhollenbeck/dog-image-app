// Function to handle getting the dog images
function fetchPictures() {
    $('form').submit(function(event) {
        event.preventDefault();
        // Clears any previous images that were on the page from a past request
        $('.results-img').remove();
        let numDogPics = $('#number').val();
        let dogBreed = $('#breed').val();
        console.log(numDogPics);
        console.log(dogBreed);
        fetch(`https://dog.ceo/api/breed/hound-${dogBreed}/images/random/${numDogPics}`)
            .then(response => response.json())
            .then(responseJson => displayPictures(responseJson))
            // Catches all non-404 errors
            .catch(error => alert(`Please contact the system administrator.`))
    })
};

// Displays the images in the DOM
function displayPictures(responseJson) {
    // Catches the 404 error returned by the API when a breed isn't found
    if (responseJson.code == "404") {
        alert(`${responseJson.message}`);
    } else {
    console.log(responseJson);
    for (i = 0; i < responseJson.message.length; i++) {
        $('#display-pictures').append(`<img src="${responseJson.message[i]}" class="results-img">`);
    };
    };
};

// Loads the fetch function into the DOM when the app is loaded
$(fetchPictures());