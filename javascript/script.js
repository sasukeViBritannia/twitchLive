'use strict';
$(document).ready(function() {

    var arrayStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "multiplayerit", "spaziogames"];

    $('p').first().on('click', function() {
        window.alert('JS caricato');
    });

    /*$('button').eq(0).on('click', function() {
        $.ajax({
                //url: 'https://wind-bow.gomix.me/twitch-api/streams/OgamingSC2?callback=?',
                url: 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?',
                type: 'GET',
                dataType: 'jsonp'
            })
            .done(function(data) {
                console.log("success");
                if (data.stream === null) {
                    $('body').append('<p>Canale attualmente OFFLINE</p>');
                } else {
                    $('body').append('<p>Id: ' + data.stream._id + '</p>');
                    $('body').append('<p>Game: ' + data.stream.game + '</p>');
                    $('body').append('<img src="' + data.stream.preview.medium + '" alt="miniatura"></img>');
                    $('body').append('<p>Nome: ' + data.stream.channel.name + '</p>');
                    $('body').append('<img src="' + data.stream.channel.logo + '" alt="logo"></p>');
                    $('a').attr({ 'href': data.stream.channel.url, 'target': '_blank' });
                }
            })
            .fail(function() {
                console.log("erroreeeeeee");
            })
            .always(function() {
                console.log("complete");
            });

    });*/

    //ripetizione azioni per ogni elemento dell'array
    /*arrayStreamers.forEach(function(element, index) {

    	//Informazioni sul canale
        $('button').eq(1).on('click', function() {
            $.ajax({
                    url: 'https://wind-bow.gomix.me/twitch-api/channels/' + element + '?callback=?',
                    type: 'GET',
                    dataType: 'jsonp',
                })
                .done(function(data) {
                    console.log("success");
                    if (data._id === undefined) {
                        $('body').append('<p>Errore[' + index + ']: ' + data.status + '</p>');
                    } else {
                        $('body').append('<p>Nome[' + index + ']: ' + data.display_name + '</p>');
                        $('body').append('<p>Lingua: ' + data.language + '</p>');
                    }
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });
        });

        //informazioni sullo streaming
        $('button').eq(0).on('click', function() {
        $.ajax({
                url: 'https://wind-bow.gomix.me/twitch-api/streams/'+element+'?callback=?',
                type: 'GET',
                dataType: 'jsonp'
            })
            .done(function(data) {
                console.log("success");
                if (data.stream === null) {
                    $('body').append('<p>Canale attualmente OFFLINE</p>');
                } else {
                    $('body').append('<p>Id: ' + data.stream._id + '</p>');
                    $('body').append('<p>Game: ' + data.stream.game + '</p>');
                    $('body').append('<img src="' + data.stream.preview.medium + '" alt="miniatura"></img>');
                    $('body').append('<p>Nome: ' + data.stream.channel.name + '</p>');
                    $('body').append('<img src="' + data.stream.channel.logo + '" alt="logo"></p>');
                    $('a').attr({ 'href': data.stream.channel.url, 'target': '_blank' });
                }
            })
            .fail(function() {
                console.log("erroreeeeeee");
            })
            .always(function() {
                console.log("complete");
            });

    });
    });*/

    $('button').eq(1).on('click', function() {
        $.ajax({
                //url: 'https://wind-bow.gomix.me/twitch-api/channels/OgamingSC2?callback=?',
                url: 'https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?',
                //url: 'https://wind-bow.gomix.me/twitch-api/channels/hdyrtegaf?callback=?', //canale inesistente
                type: 'GET',
                dataType: 'jsonp',
            })
            .done(function(data) {
                console.log("success");
                if (data._id === undefined) {
                    $('body').append('<p>Errore: ' + data.status + '</p>');
                } else {
                    $('body').append('<p>Id: ' + data._id + '</p>');
                    $('body').append('<img src="' + data.logo + '" alt="miniatura"></img>');
                    $('body').append('<p>Nome: ' + data.display_name + '</p>');
                    $('body').append('<p>Lingua: ' + data.language + '</p>');
                }
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
    });

});

//fare una chiamata per lo stream ed una per le info del canale se quest'ultimo è offline
//se il canale esiste passo alla ricrca dello streaming
//da verificare canali italiani streaming
