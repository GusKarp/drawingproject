var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
//castle number 1
canvas.beginPath();
canvas.fillStyle = "purple";
canvas.moveTo(180,280);
canvas.lineTo(190,250);
canvas.lineTo(200,280);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "purple";
canvas.moveTo(60,280);
canvas.lineTo(70,250);
canvas.lineTo(80,280);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "purple";
canvas.moveTo(120,260);
canvas.lineTo(130,230);
canvas.lineTo(140,260);
canvas.fill();

canvas.fillStyle = "DimGrey";
canvas.fillRect(60, 280, 20, 120);

canvas.fillRect(180, 280, 20, 120);

canvas.fillRect(120, 260, 20, 120);

canvas.fillRect(80, 300, 100, 100);

canvas.fillStyle = "tan";
canvas.fillRect(115, 350, 30, 50);

canvas.beginPath();
canvas.fillStyle = "tan";
canvas.arc(130,350,15,0,Math.PI,true);
canvas.fill();

//castle number 2

canvas.beginPath();
canvas.fillStyle = "red";
canvas.moveTo(680,280);
canvas.lineTo(690,250);
canvas.lineTo(700,280);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "red";
canvas.moveTo(560,280);
canvas.lineTo(570,250);
canvas.lineTo(580,280);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "red";
canvas.moveTo(620,260);
canvas.lineTo(630,230);
canvas.lineTo(640,260);
canvas.fill();

canvas.fillStyle = "black";
canvas.fillRect(560, 280, 20, 120);

canvas.fillRect(620, 260, 20, 120);

canvas.fillRect(680, 280, 20, 120);

canvas.fillRect(580, 300, 100, 100);

canvas.fillStyle = "brown";
canvas.fillRect(615, 350, 30, 50);

canvas.beginPath();
canvas.fillStyle = "brown";
canvas.arc(630,350,15,0,Math.PI,true);
canvas.fill();

//sun
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(700,0,70,0,2*Math.PI,true);
canvas.fill();

//grass
canvas.fillStyle = "green";
canvas.fillRect(0,390,800,10);

//cannon number one
canvas.fillStyle = "DimGrey";
canvas.fillRect(215, 365, 50, 10);

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(230,380,15,0,2*Math.PI,true);
canvas.fill();

//cannon number 2
canvas.fillStyle = "DimGrey";
canvas.fillRect(475, 365, 50, 10);

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(510,380,15,0,2*Math.PI,true);
canvas.fill();
