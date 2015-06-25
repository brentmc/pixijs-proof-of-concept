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


PIXI.loader
    .add('_assets/basics/fighter.json')
    .load(onAssetsLoaded);

var jet;

function onAssetsLoaded()
{
    // create an array of textures from an image path
    var frames = [];

    for (var i = 0; i < 30; i++) {
        var val = i < 10 ? '0' + i : i;

        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(PIXI.Texture.fromFrame('rollSequence00' + val + '.png'));
    }


    // create a MovieClip (brings back memories from the days of Flash, right ?)
    jet = new PIXI.extras.MovieClip(frames);

    /*
     * A MovieClip inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    jet.position.set(300);

    jet.anchor.set(0.5);
    jet.animationSpeed = 0.7;
    jet.rotation = 1.5;

    jet.play();

    jet.interactive = true;
    jet.on('mousedown', onDown);
    jet.on('touchstart', onDown);

    stage.addChild(jet);

    animate();
}

function onDown(){
    if(jet.y > renderer.height){
        jet.y = 0;
    }else {
        jet.y += 100;
    }
}

function animate() {

    if(jet.x > renderer.width){
        jet.x = 0;
    }else {
        jet.x += 20;
    }


    middlegroundTilingSprite.tilePosition.x -= 4;
    foregroundTilingSprite.tilePosition.x -= 10;

    // render the root container
    renderer.render(stage);

    requestAnimationFrame(animate);
}
