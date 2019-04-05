function fetchPictures() {
    $('form').submit(function(event) {
        event.preventDefault();
        $('.results-img').remove();
        let numDogPics = $('#number').val();
        let dogBreed = $('#breed').val();
        console.log(numDogPics);
        console.log(dogBreed);
        fetch(`https://dog.ceo/api/breed/hound-${dogBreed}/images/random/${numDogPics}`)
            .then(response => response.json())
            .then(responseJson => displayPictures(responseJson))
            .catch(error => alert(`Please contact the system administrator.`))
    })
};

function displayPictures(responseJson) {
    if (responseJson.status !== "success") {
        alert(`${responseJson.message}`);
    } else {
    console.log(responseJson);
    for (i = 0; i < responseJson.message.length; i++) {
        $('#display-pictures').append(`<img src="${responseJson.message[i]}" class="results-img">`);
    };
    };
};

$(fetchPictures());