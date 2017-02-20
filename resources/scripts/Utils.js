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

