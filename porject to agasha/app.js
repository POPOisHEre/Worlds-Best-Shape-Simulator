////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////////////////////////- Written By Yoav Olin -\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////////////////////////                        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////////////////////////- Olin.yoav@gmail.com - \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var shape, fill;
var form = Number(prompt("Please select one of the following shapes:" + "\n" +
    "1) Rectangle" + "\n" +
    "2) Oblong Rectangle" + "\n" +
    "3) Triangle" + "\n"));
if (form == 1 || form == 2 || form == 3) {
    fill = Number(prompt("Please select one of the following fill textures:" + "\n" +
        "1) Full Asterisc:" + "\n" +
        "2) Empty Asterisc" + "\n" +
        "3) Ascending Numbers" + "\n" +
        "4) Descending numbers"));
    if (fill == 1 || fill == 2 || fill == 3 || fill == 4) {
    }
    else {
        document.write("ERROR: Please enter 1,2,3,4 ONLY");
        shape = 13; // Error & break
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
    case 1: {
        var length_1 = Number(prompt("Enter length"));
        if (errorHandlingShapes(length_1) == false) {
            break;
        }
        else {
            drawRectangle(length_1);
            document.write("<br> The perimeter of the shape is: " + length_1 * 4 + "<br> <br> The area of the shape is: " + length_1 * length_1);
            break;
        }
    }
    case 2: {
        var length_2 = Number(prompt("Enter length"));
        if (errorHandlingShapes(length_2) == false) {
            break;
        }
        else {
            drawEmptyRectangle(length_2);
            document.write("<br> The perimeter of the shape is: " + length_2 * 4 + "<br> <br> The area of the shape is: " + length_2 * length_2);
            break;
        }
    }
    case 3: {
        var length_3 = Number(prompt("Enter length"));
        if (errorHandlingShapes(length_3) == false) {
            break;
        }
        else {
            drawAscendingRectangle(length_3);
            document.write("<br> The perimeter of the shape is: " + length_3 * 4 + "<br> <br> The area of the shape is: " + length_3 * length_3);
            break;
        }
    }
    case 4: {
        var length_4 = Number(prompt("Enter length"));
        if (errorHandlingShapes(length_4) == false) {
            break;
        }
        else {
            drawDescendingRectangle(length_4);
            document.write("<br>  The perimeter of the shape is: " + length_4 * 4 + "<br> <br> The area of the shape is: " + length_4 * length_4);
            break;
        }
    }
    case 5: {
        var width = Number(prompt("Enter width"));
        var hight = Number(prompt("Enter hight"));
        if (errorHandlingShapes(width) == false || errorHandlingShapes(hight) == false) {
            break;
        }
        else {
            drawMalben(width, hight);
            document.write("<br> The perimeter of the shape is: " + (2 * (hight + width)) + "<br> <br> The area of the shape is: " + (hight * width));
            break;
        }
    }
    case 6: {
        var width = Number(prompt("Enter width"));
        var hight = Number(prompt("Enter hight"));
        if (errorHandlingShapes(width) == false || errorHandlingShapes(hight) == false) {
            break;
        }
        else {
            drawEmptyMalben(width, hight);
            document.write("<br> The perimeter of the shape is: " + (2 * (hight + width)) + "<br> <br> The area of the shape is: " + (hight * width));
            break;
        }
    }
    case 7: {
        var width = Number(prompt("Enter width"));
        var hight = Number(prompt("Enter hight"));
        if (errorHandlingShapes(width) == false || errorHandlingShapes(hight) == false) {
            break;
        }
        else {
            drawAscendingMalben(width, hight);
            document.write("<br> The perimeter of the shape is: " + (2 * (hight + width)) + "<br> <br> The area of the shape is: " + (hight * width));
            break;
        }
    }
    case 8: {
        var width = Number(prompt("Enter width"));
        var hight = Number(prompt("Enter hight"));
        if (errorHandlingShapes(width) == false || errorHandlingShapes(hight) == false) {
            break;
        }
        else {
            drawDescendingMalben(width, hight);
            document.write("<br> The perimeter of the shape is: " + (2 * (hight + width)) + "<br> <br> The area of the shape is: " + (hight * width));
            break;
        }
    }
    case 9: {
        length = Number(prompt("Enter length"));
        if (errorHandlingShapes(length) == false) {
            break;
        }
        else {
            triangleAsterisk(length);
            document.write("<br> The perimeter of the shape is: " + (Math.sqrt(2 * (length * length)) + 2 * length) + "<br> <br> The area of the shape is: " + ((length * length) / 2));
            break;
        }
    }
    case 10: {
        length = Number(prompt("Enter length"));
        if (errorHandlingShapes(length) == false) {
            break;
        }
        else {
            drawEmptyTriangle(length);
            document.write("<br> The perimeter of the shape is: " + (Math.sqrt(2 * (length * length)) + 2 * length) + "<br> <br> The area of the shape is: " + ((length * length) / 2));
            break;
        }
    }
    case 11: {
        length = Number(prompt("Enter length"));
        if (errorHandlingShapes(length) == false) {
            break;
        }
        else {
            triangleAscending(length);
            document.write("<br> The perimeter of the shape is: " + (Math.sqrt(2 * (length * length)) + 2 * length) + "<br> <br> The area of the shape is: " + ((length * length) / 2));
            break;
        }
    }
    case 12: {
        length = Number(prompt("Enter length"));
        if (errorHandlingShapes(length) == false) {
            break;
        }
        else {
            triangleDescending(length);
            document.write("<br> The perimeter of the shape is: " + (Math.sqrt(2 * (length * length)) + 2 * length) + "<br> <br> The area of the shape is: " + ((length * length) / 2));
            break;
        }
    }
    default: {
        break;
    }
}
////////////////////////////////////////////////A S C E N D I N G      R E C T A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function drawAscendingRectangle(width) {
    for (var i = 1; i <= width; i++) {
        for (var j = 1; j <= width; j++) {
            document.write("" + j);
        }
        document.write("<br>");
    }
}
////////////////////////////////////////////////A S C E N D I N G      M A L B E N\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function drawAscendingMalben(width, hight) {
    for (var i = 1; i <= hight; i++) {
        for (var j = 1; j <= width; j++) {
            document.write("" + j);
        }
        document.write("<br>");
    }
}
/////////////////////////////////////////////////D E S C E N D I N G     R E C T A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function drawDescendingRectangle(width) {
    for (var i = 1; i <= width; i++) {
        for (var j = width; j >= 1; j--) {
            document.write("" + j);
        }
        document.write("<br>");
    }
}
/////////////////////////////////////////////////D E S C E N D I N G     M A L B E N\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function drawDescendingMalben(width, hight) {
    for (var i = 1; i <= hight; i++) {
        for (var j = width; j >= 1; j--) {
            document.write("" + j);
        }
        document.write("<br>");
    }
}
/////////////////////////////////////////////////E M P T Y    R E C T A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function drawEmptyRectangle(width) {
    drawHorizontalLine1(width);
    document.write("<br>");
    drawEmptyLine(width);
    drawHorizontalLine1(width);
}
function drawHorizontalLine1(len) {
    for (var j = 0; j < len; j++) {
        document.write("*");
    }
}
function drawEmptyLine(width) {
    for (var i = 0; i < width - 2; i++) {
        document.write("*");
        for (var i_1 = 0; i_1 < width - 2; i_1++) {
            document.write("\xa0");
        }
        document.write("*" + "<br>");
    }
}
/////////////////////////////////////////////////E M P T Y    M A L B E N\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function drawEmptyMalben(width, hight) {
    drawHorizontalLine1(width);
    document.write("<br>");
    drawEmptyLine1(width, hight);
    drawHorizontalLine1(width);
}
function drawHorizontalLine2(len) {
    for (var j = 0; j < len; j++) {
        document.write("*");
    }
}
function drawEmptyLine1(width, hight) {
    for (var i = 0; i < hight - 2; i++) {
        document.write("*");
        for (var i_2 = 0; i_2 < width - 2; i_2++) {
            document.write("\xa0");
        }
        document.write("*" + "<br>");
    }
}
//////////////////////////////////////////////////F U L L    M A L B E N\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function drawMalben(width, hight) {
    for (var i = 0; i < hight; i++) {
        document.write("*");
        for (var i_3 = 0; i_3 < width - 2; i_3++) {
            document.write("*");
        }
        document.write("*" + "<br>");
    }
}
//////////////////////////////////////////////////F U L L    R E C T A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function drawRectangle(width) {
    for (var i = 0; i < width; i++) {
        document.write("*");
        for (var i_4 = 0; i_4 < width - 2; i_4++) {
            document.write("*");
        }
        document.write("*" + "<br>");
    }
}
////////////////////////////////////////////F U L L    T R I A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function triangleAsterisk(length) {
    for (var i = 1; i <= length; i++) {
        for (var j = 1; j <= i; j++) {
            document.write('*');
        }
        document.write('<br/>');
    }
}
///////////////////////////////////////////A S C E N D I N G      T R I A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function triangleAscending(length) {
    var j;
    for (var i = 1; i <= length; i++) {
        for (j = 1; j <= i; j++) {
            document.write(j);
        }
        document.write('<br/>');
    }
}
/////////////////////////////////////////D E S C E N D I N G      T R I A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function triangleDescending(length) {
    var j;
    for (var i = 1; i <= length; i++) {
        for (j = length; j >= i; j--) {
            document.write(j);
        }
        document.write('<br/>');
    }
}
/////////////////////////////////////////////E M P T Y     T R I A N G L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function draw1(width, hight) {
    for (var i = 0; i < hight; i++) {
        document.write("*");
        for (var i_5 = 0; i_5 < width - 2; i_5++) {
            document.write("\xa0");
        }
        document.write("*" + "<br>");
    }
}
function drawEmptyTriangle(width) {
    if (width == 0) { }
    else {
        if (width == 1) {
            document.write("*");
        }
        else {
            if (width == 2) {
                document.write("*" + "<br>" + "**");
            }
            else {
                if (width == 3) {
                    document.write("*" + "<br>" + "**" + "<br>" + "***");
                }
                else {
                    document.write("*" + "<br>" + "**" + "<br>");
                    var i = void 0;
                    for (i = 3; i < width; i++) {
                        draw1(i, 1);
                    }
                    for (var k = 0; k < i; k++) {
                        document.write("*");
                    }
                }
            }
        }
    }
}
////////////////////////////////////////Error Handling for Shapes\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function errorHandlingShapes(x) {
    if (x < 1 || isNaN(x) || x % 1 != 0) {
        document.write("Error: Please enter a positive integer ONLY");
        return false;
    }
    else {
        return true;
    }
}
//# sourceMappingURL=app.js.map