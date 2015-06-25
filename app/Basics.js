function Basics() {
    this.renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
    document.body.appendChild(this.renderer.view);

    // create the root of the scene graph
    var stage = new PIXI.Container();
    this.stage = stage;

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage('_assets/basics/penpen.png');

    // create a new Sprite using the texture
    this.bunny = new PIXI.Sprite(texture);

    // center the sprite's anchor point
    this.bunny.anchor.x = 0.5;
    this.bunny.anchor.y = 0.5;

    // move the sprite to the center of the screen
    this.bunny.position.x = 200;
    this.bunny.position.y = 150;

    stage.addChild(this.bunny);

    var self = this;
    window.requestAnimationFrame(function () {
        self.animate()
    });
}


Basics.prototype.animate = function() {

    var self = this;
    //requestAnimationFrame(self.animate);
    window.requestAnimationFrame(function () {
        self.animate()
    });

    // just for fun, let's rotate mr rabbit a little
    this.bunny.rotation += 0.1;

    // render the container
    this.renderer.render(self.stage);
};

