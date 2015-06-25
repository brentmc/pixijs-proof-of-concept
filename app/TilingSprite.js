var renderer = PIXI.autoDetectRenderer(1920, 1080, {backgroundColor : 0x1099bb, view:document.getElementById("game-canvas")});

// create the root of the scene graph
var stage = new PIXI.Container();

var backgroundTexture = PIXI.Texture.fromImage('_assets/basics/Scenery_Mountain_Static.png');
this.background = new PIXI.Sprite(backgroundTexture);
this.background.width = renderer.width;
stage.addChild(background);

var middlegroundTexture = PIXI.Texture.fromImage('_assets/basics/Scenery_Mountain_Middleground.png');
var middlegroundTilingSprite = new PIXI.extras.TilingSprite(middlegroundTexture, renderer.width, 387);
stage.addChild(middlegroundTilingSprite);
middlegroundTilingSprite.y = 550;

// create a texture from an image path
var foregroundTexture = PIXI.Texture.fromImage('_assets/basics/Scenery_Mountain_Foreground.png');
var foregroundTilingSprite = new PIXI.extras.TilingSprite(foregroundTexture, renderer.width, 360);
stage.addChild(foregroundTilingSprite);
foregroundTilingSprite.y = renderer.height - foregroundTilingSprite.height;



var count = 0;

animate();

function animate() {

    count += 0.005;

   // tilingSprite.tileScale.x = 2 + Math.sin(count);
   // tilingSprite.tileScale.y = 2 + Math.cos(count);

    middlegroundTilingSprite.tilePosition.x -= 4;
    foregroundTilingSprite.tilePosition.x -= 10;
    //tilingSprite.tilePosition.y += 1;

    // render the root container
    renderer.render(stage);

    requestAnimationFrame(animate);
}
