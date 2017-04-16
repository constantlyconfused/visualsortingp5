var bars = []; //creates an array of integers 
var drawi=0;
var drawj=0;
function setup() {
	frameRate(60);
	createCanvas(1000, 100);
	
	//insert values into array entries
	for (var i=0; i<100; i++){
		bars[i]= floor(random()*100)+1; //Inserts the values 1-100 within the array
	}
	
	//randomising of elements?
	
}

function draw() {
	var i = drawi;
	var j = drawj;
	
	if (bars[j-1]>bars[j]){
		var temp = bars[j-1];
		bars[j-1] = bars[j];
		bars[j] = temp;
		clear();
		update();
	}
	
	drawj++;

	if (j==99){
		drawi++;
		drawj=0;
	}
	
}

function update(){ //redraws bars
	for (var i=0; i<100; i++){
		fill(155-bars[i],255-bars[i],bars[i]);
		if (i==drawj) fill(255,0,0);
		rect(i*10, height, 10, -bars[i]);
	}
}
