function fetchPictures() {
    $('form').submit(function(event) {
        event.preventDefault();
        $('.results-img').remove();
        let numDogPics = $('#number').val();
        console.log(numDogPics);
        fetch(`https://dog.ceo/api/breeds/image/random/${numDogPics}`)
            .then(response => response.json())
            .then(responseJson => displayPictures(responseJson))
            .catch(error => alert(`Please contact the system administrator.`))
    })
};

function displayPictures(responseJson) {
    console.log(responseJson);
    for (i = 0; i < responseJson.message.length; i++) {
        $('#display-pictures').append(`<img src="${responseJson.message[i]}" class="results-img">`);
    };
};

$(fetchPictures());