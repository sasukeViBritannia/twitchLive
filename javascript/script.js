'use strict';
$(document).ready(function() {

            var arrayStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "multiplayerit"];
            var $selettoreCanale = $('div#patriarca').find('div.panel');

            ottieniInfo(arrayStreamers);//chiamta funzione ottiene info canali

            function ottieniInfo(array) {
            	//ripetizione azioni per ogni elemento dell'array
                array.forEach(function(element, index) {
                            //Informazioni sul canale
                            $.ajax({
                                    url: 'https://wind-bow.gomix.me/twitch-api/channels/' + element + '?callback=?',
                                    type: 'GET',
                                    dataType: 'jsonp',
                                })
                                .done(function(data) {
                                    console.log("success");
                                    if (data._id === undefined) {
                                        //$('body').append('<p>Errore[' + index + ']: ' + data.status + '</p>');
                                        window.alert('Attenzione canale chiuso');
                                    } else {
                                        $selettoreCanale.eq(index).find('div.panel-body').find('img').attr('src', data.logo);
                                        $selettoreCanale.eq(index).find('div.panel-body').find('p').children('span').eq(0).text(data.display_name);
                                        $selettoreCanale.eq(index).find('div.panel-body').find('p').children('span').eq(1).text(data.language);
                                        $selettoreCanale.eq(index).find('div.panel-body').find('p').children('span').eq(2).text(data.broadcaster_language);
                                        $selettoreCanale.eq(index).find('div.panel-body').find('p').children('span').eq(3).text(data.followers);
                                        $selettoreCanale.eq(index).find('div.panel-body').find('p').children('span').eq(4).text(data.views);
                                        $selettoreCanale.eq(index).find('div.panel-body').find('p').children('a').attr({ 'href': data.url, 'target': '_blank' }).text(data.url);
                                    }
                                })
                                .fail(function() {
                                    console.log("error");
                                })
                                .always(function() {
                                    console.log("complete");
                                });
                        });
                    }
                //informazioni sullo streaming attivo
                $('#liveChannel').on('click', function() {
                    $.ajax({
                            //url: 'https://wind-bow.gomix.me/twitch-api/channels/OgamingSC2?callback=?',
                            url: 'https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?',
                            //url: 'https://wind-bow.gomix.me/twitch-api/channels/hdyrtegaf?callback=?', //canale inesistente
                            type: 'GET',
                            dataType: 'jsonp',
                        })
                        .done(function(data) {
                            console.log("success");
                            if (data.stream === null) {
                                window.alert('Canale OFFLINE');
                            } else {
                                $('div.caption').eq(0).find('h4').text(data.stream.channel.display_name);
                                $('div.caption').eq(0).find('p').eq(0).find('span').text(data.stream.game);
                                $('div.caption').eq(0).find('p').eq(1).find('span').text(data.stream.created_at);
                                $('div.caption').eq(0).find('p').eq(2).find('span').text(data.stream.viewers);
                                $('div.thumbnail').eq(0).find('img').attr('src', data.stream.preview.large);
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
