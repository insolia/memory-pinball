/**
 * Created by Insolia on 19.02.17.
 */


$(document).ready(function () {
    $("title").text(PAGE_TITLE);

    // hide everything before start
    $(".page").hide();


    intro();
});

var buildIntro = function () {
    $(".intro-container").show();
};
var hideIntro = function () {
    $(".intro-container").hide();
};
var buildGame = function () {
    $(".game-container").show().animate({height: '650px'}, "slow");
    var field_height = 6;
    var field_width = 6;
    var gameBox = $(".game-box");
    gameBox.hide();
    console.log("Start building empty field")
    buildGameField(emptyFieldInfo(field_height, field_width));
    gameBox.fadeIn();

};

var hideGame = function () {
    $(".game-container").hide();
};

var buildGameField = function (fieldInfo) {
    var gameBoard = $(".game-board");
    for (var h = 0; h < fieldInfo.length; h++) {
        var tr = "<tr>";
        for (var w = 0; w < fieldInfo[h].length; w++) {

            // usuall cell
            var code = fieldInfo[h][w];

            if(code in BORDER_CODES){
                var td = HTML_BORDER;
                td = td.replace("{{border_id}}", 'border'+h + '_' + w);

            }else{
                var td = HTML_CELL;
                td = td.replace("{{cell_id}}", 'cell'+h + '_' + w);
            }
            td =  td.replace("{{pic_address}}", CODE_PIC_MAP[code])

            tr += td;
        }


        tr += "</tr>";
        gameBoard.append(tr);

    }

};



