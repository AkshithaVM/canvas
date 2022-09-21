const canvas=document.querySelector("canvas");
const context=canvas.getContext("2d");

context.fillStyle="red";
context.fillRect(10,10,100,50);


context.lineWidth = 5;
context.strokeRect(135, 5, 50, 50);

context.strokeStyle = "purple";
context.lineWidth = 3;
context.beginPath();
  for (let y = 10; y < 100; y += 10) {
    context.moveTo(200, y);
    context.lineTo(1000, y);
  }
  context.stroke();

context.beginPath();
context.arc(95, 100, 40, 0, 2 * Math.PI);
context.stroke();

