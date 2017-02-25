/**
 * Created by Insolia on 19.02.17.
 */

var emptyFieldInfo = function (height, width) {
    var fieldInfo = [];

    for (var h = -1; h <= height; h++) {
        var fieldRow = [];
        for (var w = -1; w <= width; w++) {

            if ((h == -1 || h == height) && (w == -1 || w == width)) {
                fieldRow.push(CODE_CORNER_BORDER);
            } else if (h == -1 && !(w == -1 || w == width)) {
                fieldRow.push(CODE_TOP_BORDER);
            } else if (h == height && !(w == -1 || w == width)) {
                fieldRow.push(CODE_BOTTOM_BORDER);
            } else if (w == -1 && !(h == -1 || h == height)) {
                fieldRow.push(CODE_LEFT_BORDER);
            } else if (w == width && !(h == -1 || h == height)) {
                fieldRow.push(CODE_RIGHT_BORDER);
            } else {
                fieldRow.push(CODE_EMPTY_CELL);
            }
        }
        fieldInfo.push(fieldRow);
    }
    return fieldInfo;
};

var getAllPossibleWalls = function (height, width) {
    var apw = [];
    for (var h = 1; h <= height; h++) {
        for (var w = 1; w <= width; w++) {
            apw.push([h, w]);
        }
    }
    return apw;
};

var generateLevel = function (height, width, numOfWalls) {
    var fieldInfo = emptyFieldInfo(height, width);
    var L = [];
    var R = [];
    var Ball = [];

    var allPossibleWalls = getAllPossibleWalls(height, width);
    var chosenWallNumber;

    for (var i = 0; i < numOfWalls; i++) {

        chosenWallNumber = Math.floor((Math.random() * allPossibleWalls.length));

        var wallPos = allPossibleWalls[chosenWallNumber];
        allPossibleWalls.splice(chosenWallNumber, 1);

        if (Math.random() > 0.5) {
            var code = CODE_RIGHT_WALL;
            R.push(wallPos);
        } else {
            var code = CODE_LEFT_WALL;
            L.push(wallPos);
        }
        fieldInfo[wallPos[0]][wallPos[1]] = code;
    }
    var ballPos = generateBallPosition(height, width);
    Ball.push(ballPos);
    fieldInfo[ballPos[0]][ballPos[1]] = CODE_BALL;

    var answer = calculateAnswer(Ball, fieldInfo);
    fieldInfo[answer[0]][answer[1]] = CODE_CORRECT_ANSWER;

    var level = {};
    level[CODE_BALL] = Ball;
    level[CODE_RIGHT_WALL] = R;
    level[CODE_LEFT_WALL] = L;
    level['fieldInfo'] = fieldInfo;
    level['answer'] = answer;

    console.log("level generated");
    console.log(level);
    return level
};

var generateBallPosition = function (height, width) {
    var borderSide = Math.floor((Math.random() * 4) + 1);

    /*
     *     1
     *  |-----|
     * 4|     |2
     *  |-----|
     *     3
     * */

    switch (borderSide) {
        case 1:
            return [0, Math.floor((Math.random() * (width))) + 1];
            break;
        case 2:
            return [Math.floor((Math.random() * (height))) + 1, width + 1];
            break;
        case 3:
            return [height + 1, Math.floor((Math.random() * (width))) + 1];
            break;
        case 4:
            return [Math.floor((Math.random() * (height))) + 1, 0];
            break;
    }

};

var getElementId = function (elementCode, h, w) {

    if (BORDER_CODES.indexOf(elementCode) > -0.5) {
        return 'border_' + h + '_' + w;
    }
    switch (elementCode) {
        case CODE_LEFT_WALL:
            return 'left_wall_' + h + '_' + w;
        case CODE_RIGHT_WALL:
            return 'right_wall_' + h + '_' + w;
        case CODE_EMPTY_CELL:
            return 'cell_' + h + '_' + w;
        case CODE_BALL:
            return 'ball_' + h + '_' + w;
        case CODE_CORRECT_ANSWER:
            return 'correct_answer_' + h + '_' + w;
        case CODE_USER_ANSWER:
            return 'user_answer_' + h + '_' + w;

    }
};

var getCoordinatesById = function (elementId) {
    var elIdSplit = elementId.split("_");
    return [elIdSplit[elIdSplit.length - 2], elIdSplit[elIdSplit.length - 1]]
};

var calculateAnswer = function (ball_list, fieldInfo) {

    var calculateAnswerByStep = function (from, now) {
        // this function recursivly calculates final ball state.
        // each iteration of it makes one step from cell to cell.
        var current_code = fieldInfo[now[0]][now[1]];
        if (BORDER_CODES.indexOf(current_code) >= 0) {
            //we came to the border, return
            return now;
        }
        var diff = [now[0] - from[0], now[1] - from[1]];
        var new_diff;
        switch (current_code) {
            case CODE_EMPTY_CELL:
                new_diff = diff;
                break;
            case CODE_LEFT_WALL:
                new_diff = [diff[1], diff[0]];
                break;
            case CODE_RIGHT_WALL:
                new_diff = [-diff[1], -diff[0]];
        }
        var to = [now[0] + new_diff[0], now[1] + new_diff[1]];
        return calculateAnswerByStep(now, to);
    };

    var to;
    // we are looking forward to support multiball levels, but for now, lets just hack it this way
    // TODO: make fully functionall multiball support
    var ball = ball_list[0];
    var efi = emptyFieldInfo(Settings.field_height, Settings.field_width);
    switch (efi[ball[0]][ball[1]]) {
        case CODE_BOTTOM_BORDER:
            to = [ball[0] - 1, ball[1]];
            break;
        case CODE_TOP_BORDER:
            to = [ball[0] + 1, ball[1]];
            break;
        case CODE_LEFT_BORDER:
            to = [ball[0], ball[1] + 1];
            break;
        case CODE_RIGHT_BORDER:
            to = [ball[0], ball[1] - 1];
            break;
    }
    return calculateAnswerByStep(ball, to);
};





