var renderer = PIXI.autoDetectRenderer(1920, 1080, {backgroundColor : 0x1099bb, view:document.getElementById("game-canvas")});

// create the root of the scene graph
var stage = new PIXI.Container();

var sprite = PIXI.Sprite.fromImage('_assets/basics/wordmonster.png');

sprite.position.set(230,264);
sprite.interactive = true;
sprite.on('mousedown', onDown);
sprite.on('touchstart', onDown);

stage.addChild(sprite);

function onDown (eventData) {

    sprite.x = Math.random() * 1700;
    sprite.y = Math.random() * 700;
}
// start animating
animate();

function animate() {

    requestAnimationFrame(animate);

    // render the root container
    renderer.render(stage);
}
