$(document).ready(function() {
    $.ajax({
        url: 'https://rickandmortyapi.com/api/character',
        type: 'GET',
        dataType: 'json', 
        success: function(response) {
            response.results.forEach(function(character) {
                // Criando a div para o personagem
                const characterDiv = $('<div class="character" id="' + character.name.replace(/\s+/g, '') + '"></div>');

                // Adicionando o nome do personagem na div
                characterDiv.append('<h2>' + character.name + '</h2>');

                // Criando uma div para separar o nome do personagem da próxima informação
                const separatorDiv = $('<div class="separator texto"></div>');

                // Adicionando a div do separador na div do personagem
                characterDiv.append(separatorDiv);

                // Adicionando o status e a espécie do personagem na div do personagem
                characterDiv.append('<p>Status: ' + character.status + '</p>');
                characterDiv.append('<p>Espécie: ' + character.species + '</p>');

                // Criando uma div separada para a imagem
                const imageDiv = $('<div class="image-container"></div>');

                // Adicionando a imagem dentro da div imageDiv
                imageDiv.append('<img src="' + character.image + '" alt="Character Image" class="imagem">');

                // Adicionando a div imageDiv na div do personagem
                characterDiv.append(imageDiv);

                // Adicionando a div do personagem ao elemento com ID "characters"
                $('#characters').append(characterDiv);
            });
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
});
