$(document).ready(function() {
    $.ajax({
        url: 'https://rickandmortyapi.com/api/character',
        type: 'GET',
        dataType: 'json', 
        success: function(response) {
            response.results.forEach(function(character) {
                const characterDiv = $('<div class="character" id="' + character.name.replace(/\s+/g, '') + '"></div>');

                characterDiv.append('<h2>' + character.name + '</h2>');

                const separatorDiv = $('<div class="separator texto"></div>');

                characterDiv.append(separatorDiv);

                characterDiv.append('<p>Status: ' + character.status + '</p>');
                characterDiv.append('<p>Espécie: ' + character.species + '</p>');

                const imageDiv = $('<div class="image-container"></div>');

                imageDiv.append('<img src="' + character.image + '" alt="Character Image" class="imagem">');

                characterDiv.append(imageDiv);
                $('#characters').append(characterDiv);
            });
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
});
