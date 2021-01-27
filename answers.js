var sketch1 = function(o) {
    
let words = ["yoga", "taking a bath", "sitting outside", "eating a banana", "mediation", "a gratitude list", "dancing until you feel something", "going for a walk", "cheering up", "not being sad", "drinking water", "not worrying about it", "lighting a candle and relaxing", "this diet", "running", "setting aside some time", "listening to music", "vitamins", "cbd", "talking to your therapist", "cutting out gluten", "just not thinking about it", "focusing on something positive", "letting go", "seeing a doctor", "journaling", "deep breathing", "napping", "the gym", "being a morning person", "taking up knitting", "dressing nicer", "wearing makeup", "just going on a date", "putting your phone down", "seeing what the internet says", "coconut oil", "not fixating on western medicine", "stretching"
            ]
    
o.setup = function(){
  o.sketchWidth = document.getElementById("output").offsetWidth;
  o.sketchHeight = document.getElementById("output").offsetHeight;
  
  let cnv = o.createCanvas(o.sketchWidth, o.sketchHeight);

  cnv.parent('output');
  cnv.style('z-index','2');
  cnv.background(224, 174, 224, .0);
  // cnv.background('#FF0000');
      
  o.textFont("Righteous");
  o.textSize(o.width / 17);
  o.textStyle(o.BOLD);
  o.textAlign (o.CENTER, o.CENTER);
  o.fill('#DAF7A6');
  o.noLoop();
    
  let button = o.createButton('no? what about this?')
  button.parent('output');
  button.mouseClicked(o.draw);
    }

    
  o.draw = function (){  
    o.background('#E0AEE0'); 
    let randomwords = o.random(words);
    o.text(randomwords, o.sketchWidth/2, o.sketchHeight/2); 
  }
}



var sketch2 = function (d) {
  d.setup = function() {
  
  d.sketchWidth = document.getElementById("body").offsetWidth;
  d.sketchHeight = document.getElementById("body").offsetHeight;
  
  let bck = d.createCanvas(d.sketchWidth, d.sketchHeight);

  bck.parent('body');
  bck.position(0,0);
  bck.style('z-index','-1');
  
  d.textFont("Righteous",12);
  d.textStyle(d.BOLD);
  d.textAlign(d.LEFT);
  d.fill('#DAF7A6');
  }

d.draw = function() {
 if (d.mouseIsPressed) {
    d.text('??????', d.mouseX, d.mouseY);
    d.frameRate(30);}
 else {
    d.text('did you try it yet?', d.random(d.width), d.random(d.height));
    d.frameRate(1);
 }
}
    
d.windowResized = function(){
    d.resizeCanvas(d.windowWidth,d.windowHeight);
    }

}


var myp51 = new p5(sketch1);
var myp52 = new p5(sketch2);