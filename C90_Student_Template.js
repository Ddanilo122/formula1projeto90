canvas = document.getElementById('myCanvas');
/*
Corrija o nome da função e uso o context 2d
*/
ctx = canvas.getContext("2d");

car1Width = 120;
car1Height = 70;
car1Image = "car1.png";
car1X = 10;
car1Y = 10;

car2Width = 120;
car2Height = 70;
car2Image = "car2.png";
car2X = 10;
car2Y = 100;

function car2_right(){
uploadBackground()
car2X += 10
uploadcar2()
uploadcar1()


}
function car2_down(){
	uploadBackground()
	car2Y+=10
	uploadcar2()
	uploadcar1()
}
function car2_left(){
uploadBackground()
car2X-=10
uploadcar2()
uploadcar1()

}
function car2_up(){
uploadBackground()
car2Y-=10
uploadcar2()
uploadcar1()

}
function car1_right(){
uploadBackground()
car1X+=10
uploadcar1()
uploadcar2()


}
function car1_left(){
	uploadBackground()
	car1X-=10
	uploadcar1()
	uploadcar2()
}
function car1_down(){
	uploadBackground()
	car1Y+=10
	uploadcar1()
	uploadcar2()
}
function car1_up(){
	uploadBackground()
	car1Y-=10
	uploadcar1()
	uploadcar2()
}

backgroundImage = "racing.jpg";

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, onloading essa variável
	backgroundImgTag.src = backgroundImage;   // carregue a imagem

	car1ImgTag = new Image(); //definindo uma variável com uma nova imagem
	/*
	Upload the correct car
	*/
	car1ImgTag.onload = uploadcar1; // ajustando uma função, onloading essa variável
	/*
	Assign a correct carImage variable
	*/
	car1ImgTag.src = car1Image;   // carregue a imagem

	car2ImgTag = new Image(); //definindo uma variável com uma nova imagem
	car2ImgTag.onload = uploadcar2; // ajustando uma função, onloading essa variável
	car2ImgTag.src = car2Image;   // carregue a imagem
}

function uploadBackground() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height);
}
function uploadcar2() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38'&& car1Y>-10)
		{
			car1_up();
			console.log("Y"+car1Y);
		}
		if(keyPressed == '40' && car1Y<520)
		{
			car1_down();
			console.log("Y"+car1Y);
		}
		if(keyPressed == '37' && car1X>0)
		{
			car1_left();
			console.log("X"+car1X);
		}
		if(keyPressed == '39' && car1X<680)
		{
			car1_right();
			console.log("X"+car1X);
		}
		if(keyPressed == '87'&& car2Y>-10)
		{
			car2_up();
			console.log("tecla W");
		}
		if(keyPressed == '83' && car2Y<520)
		{
			car2_down();
			console.log("tecla S");
		}
		if(keyPressed == '65'&& car2X>0)
		{
			car2_left();
			console.log("tecla A");
		}
		if(keyPressed == '68'&& car2X<680)
		{
			car2_right();
			console.log("tecla D");
		}
}