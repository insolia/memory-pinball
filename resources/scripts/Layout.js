/**
 * Created by Insolia on 19.02.17.
 */

$(document).ready(function () {
    $("title").text(Settings.page_title);

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
    console.log("Start building empty field");
    buildGameField(emptyFieldInfo(Settings.field_height, Settings.field_width));
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

            if (!!(BORDER_CODES.indexOf(code) + 1)) {
                var td = HTML_BORDER;
                td = td.replace("{{border_id}}", 'border_' + h + '_' + w);
                td = td.replace("{{ball_id}}", getElementId(CODE_BALL,h,w));
                td = td.replace("{{corr_ans_id}}", getElementId(CODE_CORRECT_ANSWER,h,w));
                td = td.replace("{{user_ans_id}}", getElementId(CODE_USER_ANSWER,h,w));



            } else {
                var td = HTML_CELL;
                td = td.replace("{{cell_id}}", getElementId(CODE_EMPTY_CELL,h,w));
                td = td.replace("{{right_wall_id}}", getElementId(CODE_RIGHT_WALL,h,w));
                td = td.replace("{{left_wall_id}}", getElementId(CODE_LEFT_WALL,h,w));

            }
            td = td.replace("{{pic_address}}", CODE_PIC_MAP[code]);

            tr += td;
        }


        tr += "</tr>";
        gameBoard.append(tr);

    }
    $(".tech").hide();
};



