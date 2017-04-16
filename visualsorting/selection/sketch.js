var bars = []; //creates an array of integers 
var sortedto=0;
var index=0;
var currmin;

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
	
	if (index<100){
		if(bars[index]<bars[min]){
			min=index;
			currmin=min;
		}
		index++;
		clear();
		update();
	}else{
		var temp=bars[sortedto]; //Save the value at the index sorted to
		bars[sortedto]=bars[min]; //Swap it with the next min element in the array
		bars[min]=temp;
		
		sortedto++; //Increment where we have sorted to in the array
		index=sortedto;
		min=sortedto;
		currmin=min;
	}

	
}

function update(){ //redraws bars
	for (var i=0; i<100; i++){
		fill(155-i,255-i,i);
		if (i==index) fill(255,0,0);
		if (i==currmin) fill(0,0,255);
		rect(i*10, height, 10, -bars[i]);
	}
}