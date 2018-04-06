////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////////////////////////- Written By Yoav Olin -\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////////////////////////                        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////////////////////////- Olin.yoav@gmail.com - \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\





let shape, fill: number

let form = Number(prompt("Please select one of the following shapes:" + "\n" +
	"1) Rectangle" + "\n" +
	"2) Oblong Rectangle" + "\n" +  
	"3) Triangle" + "\n"));

if (form ==1 || form==2 || form==3)   // check for the correct input
{
	fill = Number(prompt("Please select one of the following fill textures:" + "\n" +
		"1) Full Asterisc:" + "\n" +
		"2) Empty Asterisc" + "\n" +
		"3) Ascending Numbers" + "\n" +
		"4) Descending numbers"));

	if (fill ==1 ||fill==2||fill==3||fill==4) {  // check for the correct input
	}
	else {
		document.write("ERROR: Please enter 1,2,3,4 ONLY");
		shape = 13;    // Error & break
	}
}
else {
	document.write("ERROR: Please enter 1,2,3 ONLY");
	shape = 13; // Error & break
}

	


// error handling
///




if (form == 1 && fill == 1) {
	shape = 1;
}

if (form == 1 && fill == 2) {
	shape = 2;
}
if (form == 1 && fill == 3) {
	shape = 3;
}
if (form == 1 && fill == 4) {
	shape = 4;
}
if (form == 2 && fill == 1) {
	shape = 5;
}
if (form == 2 && fill == 2) {
	shape = 6;
}
if (form == 2 && fill == 3) {
	shape = 7;
}
if (form == 2 && fill == 4) {
	shape = 8;
}
if (form == 3 && fill == 1) {
	shape = 9;
}
if (form == 3 && fill == 2) {
	shape = 10;
}
if (form == 3 && fill == 3) {
	shape = 11;
}
if (form == 3 && fill == 4) {
	shape = 12;
}







switch (shape) {
	case 1: {                                     // riboua male kohaviyot
		let length = Number(prompt("Enter length"));
		if (errorHandlingShapes(length) == false) {
			break;
		}
		else {
			drawRectangle(length);
			document.write("<br> The perimeter of the shape is: " + length * 4 +"<br> <br> The area of the shape is: " + length*length)
			
			break;
		}
	}

	case 2: {                                       // riboua rek
		let length = Number(prompt("Enter length"));
		if (errorHandlingShapes(length) == false) {
			break;
		}
		else {
			drawEmptyRectangle(length)
			document.write("<br> The perimeter of the shape is: " + length * 4 + "<br> <br> The area of the shape is: " + length * length)
			break;
		}
	}
	case 3: {                                        // riboua ole
		let length = Number(prompt("Enter length"));
		if (errorHandlingShapes(length) == false) {
			break;
		}
		else {
			drawAscendingRectangle(length)
			document.write("<br> The perimeter of the shape is: " + length * 4 + "<br> <br> The area of the shape is: " + length * length)
			break;
		}
	}
	case 4: {                                         // ribua yored
		let length = Number(prompt("Enter length"));
		if (errorHandlingShapes(length) == false) {
			break;
		}
		else {
			drawDescendingRectangle(length)
			document.write("<br>  The perimeter of the shape is: " + length * 4 + "<br> <br> The area of the shape is: " + length * length)
			break;
		}
	}
	case 5: {                                          // malben male
		let width = Number(prompt("Enter width"));
		let hight = Number(prompt("Enter hight"));
		if (errorHandlingShapes(width) == false || errorHandlingShapes(hight)==false) {
			break;
		}
		else {
			drawMalben(width, hight)
			document.write("<br> The perimeter of the shape is: " + (2 * (hight + width)) + "<br> <br> The area of the shape is: " + (hight * width))
			break;
		}
	}
	case 6: {                                         //malben rek
		let width = Number(prompt("Enter width"));
		let hight = Number(prompt("Enter hight"));
		if (errorHandlingShapes(width) == false || errorHandlingShapes(hight) == false) {
			break;
		}
		else {
			drawEmptyMalben(width, hight)
			document.write("<br> The perimeter of the shape is: " + (2 * (hight + width)) + "<br> <br> The area of the shape is: " + (hight * width))
			break;
		}
	}
	case 7: {                                         // malben ole
		let width = Number(prompt("Enter width"));
		let hight = Number(prompt("Enter hight"));
		if (errorHandlingShapes(width) == false || errorHandlingShapes(hight) == false) {
			break;
		}
		else {
			drawAscendingMalben(width, hight)
			document.write("<br> The perimeter of the shape is: " + (2 * (hight + width)) + "<br> <br> The area of the shape is: " + (hight * width))
			break;
		}
	}
	case 8: {                                          // malben yored
		let width = Number(prompt("Enter width"));
		let hight = Number(prompt("Enter hight"));
		if (errorHandlingShapes(width) == false || errorHandlingShapes(hight) == false) {
			break;
		}
		else {
			drawDescendingMalben(width, hight)
			document.write("<br> The perimeter of the shape is: " + (2 * (hight + width)) + "<br> <br> The area of the shape is: " + (hight * width))
			break;
		}
	}
	case 9: {                                            // meshulash male
		length = Number(prompt("Enter length"))
		if (errorHandlingShapes(length) == false) {
			break;
		}
		else {
			triangleAsterisk(length)
			document.write("<br> The perimeter of the shape is: " + (Math.sqrt(2 * (length * length)) + 2 * length) + "<br> <br> The area of the shape is: " + ((length * length) / 2))
			break;
		}
	}
	case 10: {                                            //meshulash rek
		length = Number(prompt("Enter length"))
		if (errorHandlingShapes(length) == false) {
			break;
		}
		else {
			drawEmptyTriangle(length)
			document.write("<br> The perimeter of the shape is: " + (Math.sqrt(2*(length*length))+2*length) + "<br> <br> The area of the shape is: " + ((length * length) /2))
			break;
		}
	}
	case 11: {                                             //meshulash ole
		length = Number(prompt("Enter length"))
		if (errorHandlingShapes(length) == false) {
			break;
		}
		else {
			triangleAscending(length)
			document.write("<br> The perimeter of the shape is: " + (Math.sqrt(2 * (length * length)) + 2 * length) + "<br> <br> The area of the shape is: " + ((length * length) / 2))
			break;
		}
	}
	case 12: {                                              //meshulash yored
		length = Number(prompt("Enter length"))
		if (errorHandlingShapes(length) == false) {
			break;
		}
		else {
			triangleDescending(length)
			document.write("<br> The perimeter of the shape is: " + (Math.sqrt(2 * (length * length)) + 2 * length) + "<br> <br> The area of the shape is: " + ((length * length) / 2))
			break;
		}
	}
	default: {
		break;
	}
}


////////////////////////////////////////////////A S C E N D I N G      R E C T A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		function drawAscendingRectangle(width: number): void {

			for (let i = 1; i <= width; i++) {

				for (let j = 1; j <= width; j++) {
					document.write(`${j}`)
				}
				document.write("<br>")
			}
		}
////////////////////////////////////////////////A S C E N D I N G      M A L B E N\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


function drawAscendingMalben(width: number, hight: number): void {
	
	for (let i = 1; i <= hight; i++) {
		
		for (let j = 1; j <= width ; j++) {
			document.write(`${j}`)
		}
		document.write("<br>")
	}
}
/////////////////////////////////////////////////D E S C E N D I N G     R E C T A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function drawDescendingRectangle(width: number): void {

	for (let i = 1; i <= width; i++) {

		for (let j = width; j >= 1; j--) {
			document.write(`${j}`)
		}
		document.write("<br>")
	}
}
/////////////////////////////////////////////////D E S C E N D I N G     M A L B E N\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function drawDescendingMalben(width: number, hight: number): void {

	for (let i = 1; i <= hight; i++) {

		for (let j = width; j >=1; j--) {
			document.write(`${j}`)
		}
		document.write("<br>")
	}
}
/////////////////////////////////////////////////E M P T Y    R E C T A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function drawEmptyRectangle(width: number) {
	drawHorizontalLine1(width)
	document.write("<br>")
	drawEmptyLine(width)
	drawHorizontalLine1(width)
}


function drawHorizontalLine1(len: number): void {
	for (let j = 0; j < len; j++) {
		document.write("*")
	}
}



function drawEmptyLine(width, ): void {
	for (let i = 0; i < width - 2; i++) {
		document.write("*")
		for (let i = 0; i < width - 2; i++) {
			document.write("\xa0")
		}
		document.write("*" + "<br>")
	}
}

/////////////////////////////////////////////////E M P T Y    M A L B E N\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function drawEmptyMalben(width: number, hight: number) {
	drawHorizontalLine1(width)
	document.write("<br>")
	drawEmptyLine1(width, hight)
	drawHorizontalLine1(width)
}


function drawHorizontalLine2(len: number): void {
	for (let j = 0; j < len; j++) {
		document.write("*")
	}
}
	


function drawEmptyLine1(width, hight): void {
	for (let i = 0; i < hight-2; i++) {
		document.write("*")
		for (let i = 0; i < width-2; i++) {
			document.write("\xa0")
		}
		document.write("*" + "<br>")
	}
}

//////////////////////////////////////////////////F U L L    M A L B E N\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function drawMalben(width: number, hight: number): void {
				for (let i = 0; i < hight; i++) {
					document.write("*")
					for (let i = 0; i < width - 2; i++) {
						document.write("*")
					}
					document.write("*" + "<br>")
				}
			}
//////////////////////////////////////////////////F U L L    R E C T A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



function drawRectangle(width:number): void {
	for (let i = 0; i < width; i++) {
		document.write("*")
		for (let i = 0; i < width-2 ; i++) {
			document.write("*")
		}
		document.write("*" + "<br>")
	}
}

////////////////////////////////////////////F U L L    T R I A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function triangleAsterisk(length: number): void {
	for (let i = 1; i <= length; i++) {
		for (let j = 1; j <= i; j++) {
			document.write('*');
		}
		document.write('<br/>');
	}
}
///////////////////////////////////////////A S C E N D I N G      T R I A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function triangleAscending(length: number): void {
	let j
	for (let i = 1; i <= length; i++) {
		for (j = 1; j <= i; j++) {
			document.write(j);
		}
		document.write('<br/>');
	}
}

/////////////////////////////////////////D E S C E N D I N G      T R I A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function triangleDescending(length: number): void {
	let j
	for (let i = 1; i <= length; i++) {
		for (j = length; j >= i; j--) {
			document.write(j);
		}
		document.write('<br/>');
	}
}

/////////////////////////////////////////////E M P T Y     T R I A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function draw1(width, hight): void {
	for (let i = 0; i < hight; i++) {
		document.write("*")
		for (let i = 0; i < width - 2; i++) {
			document.write("\xa0")
		}
		document.write("*" + "<br>")
	}
}


function drawEmptyTriangle(width: number): void {

	if (width == 0) { }
	else {
		if (width == 1) {
			document.write("*")
		}
		else {
			if (width == 2) {
				document.write("*" + "<br>" + "**")
			}
			else {
				if (width == 3) {
					document.write("*" + "<br>" + "**" + "<br>" + "***")
				}
				else {
					document.write("*" + "<br>" + "**" + "<br>")
					let i
					for (i = 3; i < width; i++) {

						draw1(i, 1);

					}
					for (let k = 0; k < i; k++) {
						document.write("*")
					}
				}
			}
		}
	}
}
////////////////////////////////////////Error Handling for Shapes\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


function errorHandlingShapes(x: any): boolean {
	if (x < 1 || isNaN(x) || x % 1 != 0) {   // number in the right range, is a number, is an integer
		document.write("Error: Please enter a positive integer ONLY")
		return false
	
	}
	else {
		return true

	}
}





 
