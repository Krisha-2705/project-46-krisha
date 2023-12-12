
var coolbkg, sky
var trackstar, greendude
var mafia 
var buildings, buildingImg
var buildingsGroup



function preload () {
    coolbkg= loadImage("coolbkg.jpeg");
    buildingImg= loadImage ("phtofc.jpeg");
    greendude = loadImage ("greendude.png");
}

function setup () {
    createCanvas (1200,600);

    

    sky = createSprite (600,300); 
    sky.addImage(coolbkg);
    sky.scale=1.3
    sky.velocityX = -1;

    trackstar = createSprite (500,-200);
    trackstar.addImage (greendude);
    trackstar.scale = 0.1;


    buildingsGroup= createGroup()

   
}

function draw () {
    background ("orange");

    //make sky go back to original x IF it cross certain x value.
    if (sky.x < 370) {
        sky.x = 800;
    }

    if (keyDown ("SPACE")) {
        trackstar.velocityY = -13; 
    }
    
    trackstar.velocityY = trackstar.velocityY+1.5; 
    trackstar.collide (buildingsGroup);

    

    drawSprites (); 
    spawnBuildings ();
}

function spawnBuildings () {
    
    if (frameCount % 40 == 0){
        buildings = createSprite (1200,480);
        buildings.shapeColor = "black";
        buildings.velocityX = -5; 
        buildings.addImage (buildingImg);
        buildings.scale=random(1.5,4);

        buildingsGroup.add (buildings);
    }
}