/**
 * Created by Insolia on 19.02.17.
 */

var intro = function(){

    buildIntro();

    $("#button-play").click(function(){
        hideIntro();
        game();
    })


}