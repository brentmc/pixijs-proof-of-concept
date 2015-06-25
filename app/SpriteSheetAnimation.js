var renderer = PIXI.autoDetectRenderer(1920, 1080, {backgroundColor : 0x1099bb, view:document.getElementById("game-canvas")});

// create the root of the scene graph
var stage = new PIXI.Container();

PIXI.loader
    .add('_assets/basics/fighter.json')
    .load(onAssetsLoaded);

var movie;

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
    movie = new PIXI.extras.MovieClip(frames);

    /*
     * A MovieClip inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    movie.position.set(300);

    movie.anchor.set(0.5);
    movie.animationSpeed = 0.7;
    movie.rotation = 1.5;

    movie.play();

    movie.interactive = true;
    movie.on('mousedown', onDown);
    movie.on('touchstart', onDown);

    stage.addChild(movie);

    animate();
}

function onDown(){
    if(movie.y > 1080){
        movie.y = 0;
    }else {
        movie.y += 100;
    }
}

function animate() {
    //movie.rotation += 0.01;

    if(movie.x > 1920){
        movie.x = 0;
    }else {
        movie.x += 20;
    }

    // render the stage container
    renderer.render(stage);

    requestAnimationFrame(animate);
}
