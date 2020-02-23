function draw()
{
	
	var context = document.getElementById("linezone").getContext('2d');

for( var j = 0 ; j < 53 ; j++){
	
	var o = 90 + 8*j;
			
	context.lineWidth='1';
	context.fillStyle='black';
	context.strokeStyle='white';
	context.beginPath();
	

	context.moveTo(0, (o));
		for( var i = 0 ; i <34 ; i++){
			if(i<9 || i>22){
				context.lineTo(10+ 10*i,Math.random()*1 + (o));
			}else{
				context.lineTo(10+ 10*i,(o) - Math.random()*10 - 10 - Math.sin(i/1.3-j/2)*10);
			}

		}

	context.fill();
	
	context.stroke();	
	}

}
