/**
 * Created by Insolia on 19.02.17.
 */


var game = function(){
    buildGame();
    //will return field info with walls and initiall ball.
    var level = generateLevel(field_height,field_width);

    show_walls(level);


    wait();
    hide_walls(level);
    show_ball(level);
    make_walls_clicable();
    process_answer(border_id);
    move_ball(level);
};

var level = {
    L:[[3,4],[1,4],[5,5]]
};

