/**
 * Created by Insolia on 19.02.17.
 */

var field_height = 7;
var field_width = 7;

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
    $(".game-container").show().animate({height: '75%'}, "slow");
    var gameBox = $(".game-box");
    gameBox.hide();
    console.log("Start building empty field")
    buildGameField(emptyFieldInfo(field_height, field_width));
    gameBox.fadeIn("slow");

};

var hideGame = function () {
    $(".game-container").hide();
};

var buildGameField = function (fieldInfo) {
    var gameBoard = $(".game-board");
    for (var h = 0; h < fieldInfo.length; h++) {
        var tr = "<tr>";
        for (var w = 0; w < fieldInfo[h].length; w++) {

            var code = fieldInfo[h][w];

            if(!!(BORDER_CODES.indexOf(code)+1)){
                var td = HTML_BORDER;
                td = td.replace("{{border_id}}", 'border_'+h + '_' + w);

            }else{
                var td = HTML_CELL;
                td = td.replace("{{cell_id}}", 'cell_'+h + '_' + w);
                td = td.replace("{{right_wall_id}}", 'right_wall_'+h + '_' + w);
                td = td.replace("{{left_wall_id}}", 'left_wall_'+h + '_' + w);

            }
            td =  td.replace("{{pic_address}}", CODE_PIC_MAP[code])

            tr += td;
        }


        tr += "</tr>";
        gameBoard.append(tr);

    }

    $(".wall").hide();
};



