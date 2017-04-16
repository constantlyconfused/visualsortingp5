var bars = []; //creates an array of integers
var sortedto=0;
var itr=1;
var finder=0;

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
	if (finder==itr){ //This has happened when non of the sorted part of the list is larger than the next element, so we just include the next element on the end
		itr++;
		finder=0;
	}else if(bars[finder]>bars[itr]){
		var finditr=itr;
		while((finditr)!=finder){ //While the iterator has not found the finder position
			temp = bars[finditr-1]; //Switch values until the itr bar is in the right position
			bars[finditr-1] = bars[finditr];
			bars[finditr] = temp;
			finditr--;
		}
		finder=0;
		itr++;
	}else{
		finder++;
	}
	
	clear();
	update();
	
}

function update(){ //redraws bars
	for (var i=0; i<100; i++){
		fill(155-i,255-i,i);
		if (i==finder) fill(255,0,0);
		if (i==itr) fill(0,0,255);
		rect(i*10, height, 10, -bars[i]);
	}
}