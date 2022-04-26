let song = [];
let bg;
function preload(){
	song[0] = loadSound('dress_shoe_walk_solid_wood.ogg');
	song[1] = loadSound('hand_claps_medium.ogg');
	song[2] = loadSound('inkwell_and-pen_tap.ogg');
	song[3] = loadSound('light_splashing_of_water.ogg');
	song[4] = loadSound('leaves_rustling_series.ogg');
	song[5] = loadSound('objects_in_plastic_bottle.ogg');
	song[6] = loadSound('paper_crunching.ogg');
}
function setup() {
	createCanvas(800,591);
	bg = loadImage('rehearsal.jpeg');
}
function draw(){
	background(bg);
}
function mousePressed() {
	if(520 <= mouseX <= 576 && 140 <= mouseY <= 224.5){
		song[0].play();
	}
	if(577 <= mouseX <= 676 && 250.5 <= mouseY <= 471.5){
		song[1].play();
	}
	if(471 <= mouseX <= 529 && 243.5 <= 477.5){
		song[2].play();
	}
	if(385 <= mouseX <= 468 && 269 <= mouseY <= 503){
		song[3].play();
	}
	if(309 <= mouseX <= 384 && 103.5 <= mouseY <= 245.5){
		song[4].play();
	}
	if(245 <= mouseX <= 308 && 251.5 <= mouseY <= 500.5){
		song[5].play();
	}
	if(173 <= mouseX <= 228 && 133.5 <= mouseY <= 468.8){
		song[6].play();
	}
}