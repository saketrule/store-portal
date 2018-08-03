
export default function sketch (p) {

  class shelf{

    // Pass 2 numbers as position coordinates
    // from top left, x --> , y is down
    constructor(x,y,width=15,height=450){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.label = "";
      this.showLabel = false;
    }

    // Getters and setters
    setName(name){
      this.name = name;
    }

    getStats(){
      return "Stats are: \n 21";
    }

    setLabel(label){
      this.label = label;
    }

    getLabel(){
      return this.label;
    }

    // Evaluates if mouse is on shelf
    onShelf(x,y){
      if(x>this.x && x<(this.x+this.width)){
        if(y>this.y && y<(this.y+this.height)){
          return true;
        }
      }
      return false;
    }

    // Functions to draw/show stuff
    displayLabel(){
      p.fill(200);
      p.textAlign(p.CENTER, p.TOP);
      p.textSize(15);
      var location_x = this.x + this.width/2;
      var location_y = this.y + this.height + 5;
      p.text(this.getLabel() ,location_x ,location_y);
    }

    showShelf(highlight){
      // Nice colors at https://p5js.org/reference/#/p5/fill
      if(highlight){
        p.fill(75);
      }
      else{
        p.fill(30);
      }
      p.rect(this.x,this.y,this.width,this.height);
      if(this.showLabel == true){
        this.displayLabel();
      }
    }

  }
  // My shelves
  var shelves = [];
  // Dimensions of canvas
  let canvas_width = 900;
  let canvas_height = 600;

  function make_store(){
    // A better way would be to store position, dimensions, e.t.c in an array and then make these.
    var s1 = new shelf(50,30),
      // setting custom dimensions for s2
      s2 = new shelf(250,30,15,350),
      s3 = new shelf(270,30,15,350),
      s4 = new shelf(500,30),
      s5 = new shelf(520,30),
      // making s3 horizontal
      s6 = new shelf(200,canvas_height - 50,650,15),
      // Making refrigerated section!
      s7 = new shelf(canvas_width - 100,50,45, 350);

      s7.setLabel("Refrigerated");
      s7.showLabel = true;

    shelves.push(s1);
    shelves.push(s2);
    shelves.push(s3);
    shelves.push(s4);
    shelves.push(s5);
    shelves.push(s6);
    shelves.push(s7);
  }

  p.setup = function () {
    p.createCanvas(canvas_width, canvas_height);
    // Create shelves
    
    make_store();
    console.log(shelves);
  };

  p.draw = function () {
    p.background(60);
    // Making a border
    p.rect()

    // Draw core map first, then handle labels generated, else other shelves will cover labels
    for(var i=0;i<shelves.length;i++){
      if(shelves[i].onShelf(p.mouseX,p.mouseY)){
        shelves[i].showShelf(true);
      }
      else{
        shelves[i].showShelf(false);
      }
    }

    // Show stats based on mouse position
    // Do not add to same loop above, else another shelf will be generated over the label
    for(var i=0;i<shelves.length; i++){
      if(shelves[i].onShelf(p.mouseX,p.mouseY)){
        write_on_mouse(shelves[i].getStats())
      }
    }


  };

  function write_on_mouse(txt,x,y){
    p.textAlign(p.LEFT, p.TOP);
    p.fill(200);
    p.textSize(18);
    // Have self configured - i think works perfect
    p.text(txt,p.mouseX + 15,p.mouseY - 5);
  }
};