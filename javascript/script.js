'use strict';
$(document).ready(function() {

    $('p').first().on('click', function() {
        window.alert('JS caricato');
    });

    $('button').on('click', function() {
        $.ajax({
                url: 'https://wind-bow.gomix.me/twitch-api/streams/OgamingSC2?callback=?',
                type: 'GET',
                dataType: 'jsonp'
            })
            .done(function(data) {
                console.log("success");
                $('body').append('<p>Id: '+data.stream._id+'</p>');
                $('body').append('<p>Game: '+data.stream.game+'</p>');
                $('body').append('<img src="'+data.stream.preview.medium+'" alt="miniatura"></img>');
                $('body').append('<p>Nome: '+data.stream.channel.name+'</p>');
                $('body').append('<img src="'+data.stream.channel.logo+'" alt="logo"></p>');
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
