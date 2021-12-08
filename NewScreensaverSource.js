let blocks = [];
let change;
let hue;

var b = 0;

class block {
	constructor(x,y,vx,vy){
			this.x = x;
			this.y = y;
			this.vx = vx;
			this.vy = vy;
		  fill(color(random(0,255), random(0,255), random(0,255)));
		}
	update(){
			this.y += this.vy;
			
				 if (this.y < (-3) || this.y > (height-height/10)){
						this.vy = -this.vy;
					  change = random(1, 10)
					  if (change < 2){
					    fill(color(random(0,255), random(0,255), random(0,255)));
				 }		 
			 }
		}
	
	  show(){
			rect(this.x,this.y, width/10, height/10);
		}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(color(random(0,255), random(0,255), random(0,255)));
	var direct = 3;
	var spawn = height/2;
	for (var b = 0;b <= (width/20); b += 1){
		if (b%2){
			direct = random(-1,-3)
			spawn = height/2
		}
		else{
			direct = random(1, 3)
			spawn = (height/2) - 100
		}
		blocks.push(new block(0 + (b*100),spawn,direct,direct));

	}
}

function draw() {
	background;
	for (var b = 0; b < blocks.length; b += 1){
		blocks[b].update();
		blocks[b].show();
	}
}
