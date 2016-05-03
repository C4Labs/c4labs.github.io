var grid = $('#scroll-grid');
var images = ['01.png','02.png','03.png','04.png','05.png','06.png','07.png','08.png','09.png','10.png','11.png','12.png','13.png','14.png','15.png','16.png','17.png'];
var i = 0;
var scale = 1;

if (screen.width < 768)
{
	var scale = 0.25;
}

for(i = 0; i < 25; i++)
{
	addImage(i);
}	

function addImage(i) {
	var randomImg = images[Math.floor(Math.random()*images.length)];
	var xPos = toggleRand();
	var yPos = Math.floor(Math.random() * 1600);
	var element = "e_" + i;
	grid.append("<div style='' class='image " + element + "'><a href='#'><img src='images/index/" + randomImg + " '/></a></div>");
	$('.' + element).css({
		'top': yPos,
		'left': xPos
	});
	$('.' + element).transition({y: -2000},Math.floor(Math.random()*15000) + 20000,'ease-in').delay(2000).queue(function() { $(this).remove(); });
}

function addMoreImages(i) {
	var randomImg = images[Math.floor(Math.random()*images.length)];
	var xPos = toggleRand();
	var yPos = Math.floor(Math.random() * 800) + 800;
	var element = "e_" + i;
	grid.append("<div style='' class='image " + element + "'><a href='#'><img src='images/index/" + randomImg + " '/></a></div>");
	$('.' + element).css({
		'top': yPos,
		'left': xPos,
		'z-index': i+1
	});
	$('.' + element).transition({y: -2000},Math.floor(Math.random()*15000) + 20000,'ease-in').delay(2000).queue(function() { $(this).remove(); });

}
function toggleRand() 
{
  return [Math.floor(Math.random() * 200 * scale), Math.floor(Math.random() * (300) + (800 * scale))]
  [Math.random() > .5 ? 0 : 1];
}