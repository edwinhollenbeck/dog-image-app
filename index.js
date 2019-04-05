function fetchPictures() {
    $('form').submit(function(event) {
        event.preventDefault();
        let numDogPics = $('input').val();
        console.log(numDogPics);
        fetch(`https://dog.ceo/api/breeds/image/random/${numDogPics}`)
            .then(response => response.json())
            .then(responseJson => displayPictures(responseJson))
            .catch(error => alert('Something went wrong'))
    })
};

function displayPictures(responseJson) {
    console.log(responseJson);
    for (i = 0; i < responseJson.message.length; i++) {
    $('#display-pictures').append(`<img src="${responseJson.message[i]}" class="results-img">`);
    };
};

$(fetchPictures());