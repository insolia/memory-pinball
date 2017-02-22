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
            } else{
            fieldRow.push(CODE_EMPTY_CELL);
            }
        }
        fieldInfo.push(fieldRow);
    }
    console.log("Empty field info returned");
    console.log(fieldInfo)
    return fieldInfo;
};

var generateLevel = function(height,width){
    var field_info = emptyFieldInfo(height,width);

}

var generateBallPosition = function(height,width){
    var borderSide = Math.floor((Math.random() * 4) + 1);

    /*
    *     1
    *  |-----|
    * 4|     |2
    *  |-----|
    *     3
    * */

    switch (borderSide){
        case 1:
            return [0,Math.floor((Math.random() * (width+1)))];
            break;
        case 2:
            return [Math.floor((Math.random() * (height+1))), width+1];
            break;
        case 3:
            return [height+1,Math.floor((Math.random() * (width+1)))];
            break;
        case 4:
            return [Math.floor((Math.random() * (height+1))),0];
            break;
    }

};

var generateWallPosition = function(height,width){

}

