function Container() {
    this.renderer = PIXI.autoDetectRenderer(1920, 1080,{backgroundColor : 0x1099bb, view:document.getElementById("game-canvas")});

// create the root of the scene graph
    this.stage = new PIXI.Container();

    var container = new PIXI.Container();

    this.stage.addChild(container);

    this.bunnyAr = [];
    this.bunny2Ar = [];



    for (var j = 0; j < 12; j++) {

        for (var i = 0; i < 10; i++) {
            var bunny = PIXI.Sprite.fromImage('_assets/basics/wordmonster.png');
            bunny.x = bunny.width * i + 400;
            bunny.y = 40 * j;
            container.addChild(bunny);
            this.bunnyAr.push(bunny);

      //      var bunny2 = PIXI.Sprite.fromImage('_assets/basics/wordmonster.png');
        //    bunny2.x = 40 * i;
          //  bunny2.y = 40 * j;
          // container.addChild(bunny2);
           //this.bunny2Ar.push(bunny2);
        };
    };
    /*
     * All the bunnies are added to the container with the addChild method
     * when you do this, all the bunnies become children of the container, and when a container moves,
     * so do all its children.
     * This gives you a lot of flexibility and makes it easier to position elements on the screen
     */
    container.x = 100;
    container.y = 60;

    var self = this;
    window.requestAnimationFrame(function () {
        self.animate()
    });
}


Container.prototype.animate = function() {


    for(var i = 0; i < this.bunnyAr.length; i++){
        this.bunnyAr[i].rotation += 0.1;
    }

   // for(var j = 0; j < this.bunny2Ar.length; j++){
     //   this.bunny2Ar[j].rotation -= 0.2;
  //  }

    var self = this;
    //requestAnimationFrame(self.animate);
    window.requestAnimationFrame(function () {
        self.animate()
    });



    // render the container
    this.renderer.render(self.stage);
};
