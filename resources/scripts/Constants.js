/**
 * Created by Insolia on 19.02.17.
 */

CODE_EMPTY_CELL = "E";
CODE_LEFT_WALL = "L";
CODE_RIGHT_WALL = "R";

CODE_RIGHT_BORDER = "BR";
CODE_LEFT_BORDER = "BL";
CODE_TOP_BORDER = "BT";
CODE_BOTTOM_BORDER = "BB";
CODE_CORNER_BORDER = "BC";

CODE_BALL = "BALL";
CODE_CORRECT_ANSWER = "CA";
CODE_USER_ANSWER = "UA";

BORDER_CODES = [];

BORDER_CODES.push(CODE_RIGHT_BORDER);
BORDER_CODES.push(CODE_LEFT_BORDER);
BORDER_CODES.push(CODE_TOP_BORDER);
BORDER_CODES.push(CODE_BOTTOM_BORDER);
BORDER_CODES.push(CODE_CORNER_BORDER);




PIC_ADRESS_EMPTY = 'resources/files/cell_E.png';
PIC_ADRESS_LEFT_WALL  = 'resources/files/cell_L.png';
PIC_ADRESS_RIGHT_WALL = 'resources/files/cell_R.png';

PIC_ADRESS_RIGHT_BORDER = 'resources/files/border_BR.png';
PIC_ADRESS_LEFT_BORDER = 'resources/files/border_BL.png';
PIC_ADRESS_TOP_BORDER = 'resources/files/border_BT.png';
PIC_ADRESS_BOTTOM_BORDER = 'resources/files/border_BB.png';
PIC_ADRESS_CORNER_BORDER = 'resources/files/border_BC.png';
PIC_ADRESS_BALL = 'resources/files/ball.png';
PIC_ADRESS_CORECT_ANSWER = 'resources/files/correct.png';
PIC_ADRESS_USER_ANSWER = 'resources/files/wrong.png';



HTML_CELL = '<td>' +
    '<img src='+PIC_ADRESS_EMPTY  +' class="cell" id="empty_{{cell_id}}"> ' +
    '<img src='+PIC_ADRESS_RIGHT_WALL  +' class="cell tech wall" id="{{right_wall_id}}"> ' +
    '<img src='+PIC_ADRESS_LEFT_WALL +' class="cell tech wall" id="{{left_wall_id}}"> ' +
    '</td>';

HTML_BORDER = '<td> ' +
    '<img src="{{pic_address}}" class="border" id="{{border_id}}"> ' +
    '<img src='+PIC_ADRESS_BALL +' class="border tech ball " id="{{ball_id}}"> ' +
    '<img src='+PIC_ADRESS_CORECT_ANSWER +' class="border tech correct_answer" id="{{corr_ans_id}}"> ' +
    '<img src='+PIC_ADRESS_USER_ANSWER +' class="border tech user_answer" id="{{user_ans_id}}"> ' +
    '</td>';

HTML_CORRECT_ANS_LOG = "Correct";
HTML_WRONG_ANS_LOG = "Wrong";
BR = "<br>";

HTML_ABOUT = "This is a pure jQuery game <br>" +
    "You can check out source <a href='https://github.com/insolia/memory-pinball'>here</a> if you interested.<br>" +
    "Idea was stolen from <a href='https://www.lumosity.com/'>Lumosity</a> Brain Games<br>";

HTML_RULES = "You will see a maze of walls <br> " +
    "Try to memorize it as good as you can, You will only have a few seconds to look at walls. <br>" +
    "Afrer walls disappear, You'll see a ball on the edge of the field.<br>" +
    "Imagine that ball is pushed on the field and try to predict where it would leave the field <br>" +
    "But keep walls in mind. Ball would bounce of the walls and change direction.<br><br>" +
    "Click on wall you think ball will hit to see the correct answer<br>";


CLASS_CURRENT_LEVEL_WALL = "current-level-wall";
CLASS_CURRENT_LEVEL_BALL = "current-level-ball";
CLASS_CURRENT_LEVEL_CORRECT_ANSWER = "current-level-correct-answer";
CLASS_CURRENT_LEVEL_USER_ANSWER = "current-level-user-answer";



CODE_PIC_MAP = {};
CODE_PIC_MAP[CODE_EMPTY_CELL] = PIC_ADRESS_EMPTY;
CODE_PIC_MAP[CODE_LEFT_WALL]= PIC_ADRESS_LEFT_WALL;
CODE_PIC_MAP[CODE_RIGHT_WALL]= PIC_ADRESS_RIGHT_WALL;
CODE_PIC_MAP[CODE_RIGHT_BORDER]= PIC_ADRESS_RIGHT_BORDER;
CODE_PIC_MAP[CODE_LEFT_BORDER]= PIC_ADRESS_LEFT_BORDER;
CODE_PIC_MAP[CODE_TOP_BORDER]=PIC_ADRESS_TOP_BORDER;
CODE_PIC_MAP[CODE_BOTTOM_BORDER]=PIC_ADRESS_BOTTOM_BORDER;
CODE_PIC_MAP[CODE_CORNER_BORDER] = PIC_ADRESS_CORNER_BORDER;

