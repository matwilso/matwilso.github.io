let w = 1000;
let h = 1000;
let cx = w / 2.0, cy = h / 2.0;

let DENSITY = w / 30.0;

function drawArrow(x1, y1, x2, y2) {
  let a = 10.0
  let d = dist(x1, y1, x2, y2)
  push();
  translate(x2, y2);
  rotate(atan2(y2 - y1, x2 - x1));
  line(-20, 0, -d, 0);  
  translate(-20, 0);
  triangle(-a*2 , -a, 0, 0, -a*2, a);
  pop();
}

class Node {
  constructor(x, y) {
    this.name = 'Node';
    this.x = x;
    this.y = y;
    this.size = 15.0;
    this.edges = [];
  }

  addEdge(node) {
    this.edges.push(node);
  }
  
  drawEdges() {
    push();
    //stroke(0, 64)
    for (let i = 0; i < this.edges.length; i++) {
      if (this != this.edges[i]) {
        drawArrow(this.x, this.y, this.edges[i].x, this.edges[i].y);
      }
    }
    pop();
  }
  drawNode() {
    circle(this.x, this.y, this.size);
  }
}

var nodes = [];
var lastX = 0;
var lastY = 0;

function setup() {
  createCanvas(w, h);

  for (var i = 0; i < 15; i++) {
    let x = random(0, w);
    let y = random(0, h);
    nodes.push(new Node(x, y));
  }

  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 5; j++) {
      if (random(0.0, 1.0) > 0.5) {
        nodes[i].addEdge(random(nodes))
      }
    }
  }
	lastX = mouseX;
	lastY = mouseY;
}

const thres = 10;

function draw() {
  background(220);
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].x = min((nodes[i].x + random([-1,0,1])), w);
    nodes[i].y = min((nodes[i].y + random([-1,0,1])), h);
  }

	
  if (mouseIsPressed) {
	  //console.log(mouseX, lastX);
	  if (mouseX != lastX || mouseY != lastY) {
		for (let i = 0; i < nodes.length; i++) {
			if ((abs(nodes[i].x - lastX) < thres) && (abs(nodes[i].y - lastY) < thres)) {
				nodes[i].x = mouseX
				nodes[i].y = mouseY
			}
		}
	  }
  }
	lastX = mouseX;
	lastY = mouseY;



  for (let i = 0; i < nodes.length; i++) {
    nodes[i].drawEdges()
  }
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].drawNode()
  }
}
