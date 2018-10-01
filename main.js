var elem = document.querySelector('canvas');
var context = elem.getContext('2d');
 
context.fillStyle = '#000';
context.lineWidth = 1;
 
var deg_to_rad = Math.PI / 180.0 ;
var depth = 12;
 
function drawLine(x1, y1, x2, y2){
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
}
 
function drawTree(x1, y1, angle, depth){
  if (depth !== 0){
    var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 8.0);
    var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 8.0);
    drawLine(x1, y1, x2, y2, depth);
    drawTree(x2, y2, angle - Math.random()*40, depth - 1);
    drawTree(x2, y2, angle + Math.random()*40, depth - 1);
  }
}
 
context.beginPath();
drawTree(600, 800, -90, depth);
context.closePath();
context.stroke();