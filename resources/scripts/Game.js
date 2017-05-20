/**
 * Created by Insolia on 19.02.17.
 */


var game = function () {
    buildGame();
    //will return field info with walls and initiall ball.
    var level = generateLevel(Settings.field_height, Settings.field_width, Settings.num_of_walls);

    setUpLevel(level);

    var beforePlayTimer = setTimeout(function () {
        $("." + CLASS_CURRENT_LEVEL_WALL).fadeIn()
    }, CUMULATIVE_BEFORE_PLAY_DELAY);

    var memorizingTimer = setTimeout(function () {
        $("." + CLASS_CURRENT_LEVEL_WALL).fadeOut();
        $("." + CLASS_CURRENT_LEVEL_BALL).show("slow");
        $(".border").one("click", function (event) {
            //actions after user clicked his answer
            var answer_boarder_id = event.target.id;
            processAnswer(answer_boarder_id, level);
            $(".border").off("click");
            $('#play-again-button').show();
        });
    }, CUMULATIVE_MEMORIZING_DELAY);

    return [beforePlayTimer, memorizingTimer];

    /*
     make_walls_clicable();
     process_answer(border_id);
     move_ball(level);
     */
};

var setUpLevel = function (level) {
    var R = level[CODE_RIGHT_WALL];
    var L = level[CODE_LEFT_WALL];
    var Ball = level[CODE_BALL];
    var answer = level["answer"];

    for (var i = 0; i < R.length; i++) {
        $("#" + getElementId(CODE_RIGHT_WALL, R[i][0], R[i][1])).addClass(CLASS_CURRENT_LEVEL_WALL);
    }

    for (var i = 0; i < L.length; i++) {
        $("#" + getElementId(CODE_LEFT_WALL, L[i][0], L[i][1])).addClass(CLASS_CURRENT_LEVEL_WALL);
    }
    for (var i = 0; i < Ball.length; i++) {
        $("#" + getElementId(CODE_BALL, Ball[i][0], Ball[i][1])).addClass(CLASS_CURRENT_LEVEL_BALL);
    }
    $("#" + getElementId(CODE_CORRECT_ANSWER, answer[0], answer[1])).addClass(CLASS_CURRENT_LEVEL_CORRECT_ANSWER);
};

var cleanUpLevel = function (timers) {
    $('#play-again-button').hide();

    $("." + CLASS_CURRENT_LEVEL_BALL).hide();
    $("." + CLASS_CURRENT_LEVEL_WALL).hide();
    $("." + CLASS_CURRENT_LEVEL_USER_ANSWER).hide();
    $("." + CLASS_CURRENT_LEVEL_CORRECT_ANSWER).hide();

    $("." + CLASS_CURRENT_LEVEL_BALL).removeClass(CLASS_CURRENT_LEVEL_BALL);
    $("." + CLASS_CURRENT_LEVEL_WALL).removeClass(CLASS_CURRENT_LEVEL_WALL);
    $("." + CLASS_CURRENT_LEVEL_CORRECT_ANSWER).removeClass(CLASS_CURRENT_LEVEL_CORRECT_ANSWER);
    $("." + CLASS_CURRENT_LEVEL_USER_ANSWER).removeClass(CLASS_CURRENT_LEVEL_USER_ANSWER);

    timers.forEach(function (timer) {
        clearTimeout(timer);
    });

};

var processAnswer = function (answer_boarder_id, level) {
    $("." + CLASS_CURRENT_LEVEL_WALL).fadeIn();
    $("." + CLASS_CURRENT_LEVEL_CORRECT_ANSWER).fadeIn();
    var user_ans_coord = getCoordinatesById(answer_boarder_id);
    $("#" + getElementId(CODE_USER_ANSWER, user_ans_coord[0], user_ans_coord[1])).addClass(CLASS_CURRENT_LEVEL_USER_ANSWER);


    if (getElementId(CODE_BOTTOM_BORDER, level.answer[0], level.answer[1]) == answer_boarder_id) {
        userProgress.push(true);
    } else {
        userProgress.push(false);
        $("." + CLASS_CURRENT_LEVEL_USER_ANSWER).fadeIn();
    }
    updateLog();
};

var updateLog = function () {
    var hintLog = $(".left-box");

    hintLog.empty();
    var corrAnsCount = userProgress.filter(function (a) {
        return a
    }).length;
    hintLog.append("You got " + corrAnsCount + " out of " + userProgress.length + BR);
    hintLog.append("Here is your progress story");
    userProgress.forEach(function (a, ind) {
        hintLog.append(BR);
        console.log(a, ind);
        console.log(+(ind+1));
        console.log(+(ind+1) + ". " +  a ? HTML_CORRECT_ANS_LOG : HTML_WRONG_ANS_LOG)


        console.log(+(ind+1) + ". " +  a ? HTML_CORRECT_ANS_LOG : HTML_WRONG_ANS_LOG);
        if (a){
            hintLog.append(HTML_CORRECT_ANS_LOG)
        }else{
            hintLog.append(HTML_WRONG_ANS_LOG)
        }
    })
};

