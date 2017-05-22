'use strict';
$(document).ready(function() {

    $('p').first().on('click', function() {
        window.alert('JS caricato');
    });

    $('button').on('click', function() {
        $.ajax({
                url: 'https://wind-bow.gomix.me/twitch-api/games/top?callback=?',
                type: 'GET',
            })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });

    });

});

//Probabilmente da registrarsi su twitch per avere api key
