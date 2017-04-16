class bar{
	int pos;
	int val;
	
	bar(int pos, int val){
		this.pos = pos;
		this.val = val;
	}
	
	changePos(int pos){
		this.pos = pos;
	}
	
	incrementPos(){
		this.pos++;
	}
	
	decrementPos(){
		this.pos--;
	}
}