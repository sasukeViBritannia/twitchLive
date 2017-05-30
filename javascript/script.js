'use strict';
$(document).ready(function() {

    var arrayStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "multiplayerit"];
    //var arrayStreamers = ["cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "multiplayerit"];

    //Info sul canale
    function ottieniInfo(array) {
        //ripetizione azioni per ogni elemento dell'array
        array.forEach(function(element, index) {
            var $selettoreCanale = $('div#patriarca').find('div.panel').eq(index).find('div.panel-body');
            $.ajax({
                    url: 'https://wind-bow.gomix.me/twitch-api/channels/' + element + '?callback=?',
                    type: 'GET',
                    dataType: 'jsonp',
                })
                .done(function(data) {
                    console.log("success");
                    if (data._id === undefined) {
                        window.alert('Attenzione canale ' + data.display_name + ' chiuso');
                    } else {
                        $selettoreCanale.find('img').attr('src', data.logo);
                        $selettoreCanale.find('p').children('span').eq(0).text(data.display_name);
                        $selettoreCanale.find('p').children('span').eq(1).text(data.language);
                        $selettoreCanale.find('p').children('span').eq(2).text(data.broadcaster_language);
                        $selettoreCanale.find('p').children('span').eq(3).text(data.followers);
                        $selettoreCanale.find('p').children('span').eq(4).text(data.views);
                        $selettoreCanale.find('p').children('span').eq(5).text((data.created_at).substring(0, 10));
                        $selettoreCanale.find('p').children('a').attr({ 'href': data.url, 'target': '_blank' }).text(data.url);
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

    //Info sullo streaming
    function isLive(array) {
    	//var nessunoStreaming = true;
        array.forEach(function(element, index) {
            var selettoreStreaming = $('div.thumbnail').eq(index).find('div.caption');
            $.ajax({
                    url: 'https://wind-bow.gomix.me/twitch-api/streams/' + element + '?callback=?',
                    type: 'GET',
                    dataType: 'jsonp',
                })
                .done(function(data) {
                    console.log("success");
                    if (data.stream === null) {
                        //window.alert('Canale OFFLINE');
                    } else {
                    	//nessunoStreaming = false;
                        selettoreStreaming.find('h4').text(data.stream.channel.display_name);
                        selettoreStreaming.find('p').eq(0).find('span').text(data.stream.game);
                        selettoreStreaming.find('p').eq(1).find('span').text((data.stream.created_at).substring(0, 10));
                        selettoreStreaming.find('p').eq(2).find('span').text(data.stream.viewers);
                        $('div.thumbnail').eq(index).find('img').attr('src', data.stream.preview.large);
                        $('div.thumbnail').eq(index).show();
                    }
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });
        });
        //window.alert('nessunoStreaming = '+nessunoStreaming);
        /*if(nessunoStreaming){
        	$('div#dirette').find('div#nessuno').show('slow');
        }*/
    }

    ottieniInfo(arrayStreamers); //chiamata funzione ottiene info canali
    isLive(arrayStreamers); //chiamata funzione per info su streaming

});

//fare una chiamata per lo stream ed una per le info del canale se quest'ultimo è offline
//se il canale esiste passo alla ricrca dello streaming
//da verificare canali italiani streaming
