var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];
var pacman = {
    x:1,
    y:1
};

function displayWorld(){
    var output = "<div id='pacman'></div>";

    for(var i = 0; i < world.length; i++){
        output+="<div class='row'>";
        for(var j = 0; j < world[i].length; j++){
            if(world[i][j] == 0){
                output += "<div class='empty'></div>";
            }
            else if(world[i][j] == 1){
                output += "<div class='coin'></div>";
            }
            else if(world[i][j] == 2){
                output += "<div class='brick'></div>";
            }
        }
        output+="</div>";
    }
    //console.log(output);
    document.getElementById('wrapper').innerHTML = output;
}
function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20 + "px";
    document.getElementById('pacman').style.left = pacman.x*20 + "px";
}


displayWorld();
displayPacman();
document.onkeydown = function(e){
    console.log(e.keyCode);
    
    if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){ //down
        pacman.y--;
    }
    else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){//up
        pacman.y++;
    }
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){//right
        pacman.x++;
    }
    else if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){//left
        pacman.x--;
    }
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        displayWorld();
    }
    displayPacman();
};