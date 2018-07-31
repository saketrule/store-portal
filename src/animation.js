 var Engine = Matter.Engine,
     Render = Matter.Render,
     World = Matter.World,
     Bodies = Matter.Bodies,
     Body = Matter.Body,
     Vec = Matter.Vector;
 deg = Math.PI / 180;
 var engine = Engine.create();

 var render = Render.create({
     element: document.body,
     engine: engine,
     options: {
         width: 800,
         height: 500,
         wireframes: false
     }
 });

 var boxA = Bodies.rectangle(400, 200, 80, 80);
 var ballA = Bodies.circle(380, 100, 40, 10);
 var ballB = Bodies.circle(460, 10, 60, 10);
 var triA = Bodies.polygon(350, 200, 3, 50)
 var ground = Bodies.rectangle(400, 380, 500, 60, {
     isStatic: true
 });
 ballA.restitution = 0.8;
 ballB.restitution = 0.8;
 triA.restitution = 0.6;
 triA.friction = 0.01;
 boxA.restitution = 0.6;
 boxA.friction = 0.01;
 ballB.friction = 1;
 ballA.friction = 1;
 Body.rotate(boxA, 20 * deg);

 World.add(engine.world, [boxA, ballA, ballB, ground, triA]);

 Engine.run(engine);



 canvas = document.getElementById("can");
 ctx = canvas.getContext("2d");
 let cvs = rough.canvas(canvas);


 setInterval(function() {

     ctx.clearRect(0, 0, 800, 800);
     cvs.circle(ballA.position.x, ballA.position.y, 80, {
         fill: "#0000ff",
         roughness: 1
     });

     cvs.circle(ballB.position.x, ballB.position.y, 120, {
         fill: "#00ff00",
         roughness: 1
     });



     cvs.polygon(ground.vertices.map(x => [x.x, x.y]), {
         fill: "#000000",
         roughness: 0.5
     });


     cvs.polygon(triA.vertices.map(x => [x.x, x.y]), {
         fill: "#ff00ff",
         roughness: 1
     });

     cvs.polygon(boxA.vertices.map(x => [x.x, x.y]), {
         fill: "#ff0000",
         roughness: 1
     });




 }, 20)


 function rand(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }



 setInterval(function() {
     Body.setPosition(boxA, (Vec.create(400, 200)))
     Body.setPosition(ballA, (Vec.create(380, 100)));
     Body.setPosition(ballB, (Vec.create(460, 60)))
     Body.setPosition(triA, (Vec.create(300, 200)))

     Body.setVelocity(ballB, (Vec.create(rand(-10, 10), rand(-10, 10))))
     Body.setVelocity(ballA, (Vec.create(rand(-10, 10), rand(-10, 10))))
     Body.setVelocity(boxA, (Vec.create(rand(-10, 10), rand(-10, 10))))

     Body.setVelocity(triA, (Vec.create(rand(-10, 10), rand(-10, 10))))

 }, 4000)
