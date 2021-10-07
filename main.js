var canvas=new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;
block_image_width = 350;
block_image_height = 430;

var block_image_object="";
function red_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img)
	{
		block_image_object=Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({top:block_y,left:block_x});
		canvas.add(block_image_object);	});
	
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed=='82')
	{
		red_image("rr.jpg");
		console.log("red ranger appears"); 
	}
	if(keyPressed =='71')
	{
		block_x = 200;
		red_image("gr.png");
		console.log("green ranger appears");
	}
	
	if(keyPressed =='89')
	{
		block_x =350;
		red_image("yr.png");
		console.log("green ranger appears");
	}
	if(keyPressed =='80')
	{
		block_x = 600;
		red_image("pr.png");
		console.log("purple ranger appears");
	}
	if(keyPressed =='66')
	{
		block_x = 750;
		red_image("br.png");
		console.log("blue ranger appears");
	}
}