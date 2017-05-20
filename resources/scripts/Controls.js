/**
 * Created by Insolia on 19.02.17.
 */

var controls = function(){

    buildIntro();
    var timers;

    $("#button-play").click(function(){
        hideIntro();
        timers = game();
    })

    $("#play-again-button").click(function(){
        cleanUpLevel(timers);
        timers = game();
    })

    $("#menu-button").click(function(){
        cleanUpLevel(timers);
        buildIntro();
    })


}