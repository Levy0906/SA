var Ball, database;
var position;

function setup() {
    
    Database = Firebase.database();
    createCanvas(500, 500);

    Ball = createSprite (250,250,10,10);
    Ball.shapeColor = "red"; 
    var BallPostion = database.ref("bolinha/position")
    
    
}

function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        writePosition(-1, 0);
    } else if (keyDown(RIGHT_ARROW)) {
        writePosition(1, 0);
    } else if (keyDown(UP_ARROW)) {
        writePosition(0, -1);
    } else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +1);
    }
    drawSprites();
}

function writePosition(x, y) {
  database.ref("bolinha,posicao").set({

    X : Position.x =x
    y : Position.y =y
  })  
    
    
}

function readPosition(data) {
  position = data.val();
  console.log(position.x)  
  ball.x = position.x
  ball.y = position.y
}

function showError() {
   
   
}