$(document).ready(function(){
	
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	
	if ($.browser.msie || !is_chrome) {
		$('#content_bt').remove();
		var csslink = document.createElement('link');
			csslink.href='./css/wrongbro.css';
			csslink.rel='stylesheet';
			csslink.type='text/css';
		document.getElementsByTagName('head')[0].appendChild(csslink);void(0);
		
		$('#hello').html("Css3 / JS albums artworks with realtime music analytics thanks to <a href='https://github.com/cjcliffe/beatdetektor' target='_blank'>beatdetektor.js</a> <br/" +
		"><a>Covers</a> is only meant for <a href='https://www.google.com/chrome' target='_blank'>Google Chrome</a>, so please come back with it ! Here's a little preview :" + 
		"<div id='preview'><img src='./img/preview/2.jpg'/><img src='./img/preview/3.jpg'/><img src='./img/preview/4.jpg'/><img src='./img/preview/6.jpg'/><img src='./img/preview/7.jpg'/></div>");
		
				$(function(){
		    $('#preview img:gt(0)').hide();
		    setInterval(function(){
		      $('#preview :first-child').fadeOut()
		         .next('img').fadeIn()
		         .end().appendTo('#preview');}, 
		      6000);
		});
		
		//$('#preview').css("background","url('./img/preview/" + 2 + ".jpg') 50% 50% no-repeat");
		
	}
	
	var btn  = true;
	
	function openabout(){
		for(var j=0 ; j<5 ; j++){
			document.querySelectorAll('.about')[j].style.webkitTransitionDuration = '.4s'; 
			document.querySelectorAll('.about')[j].style.webkitTransitionDelay = (j/30) +'s';
			
			document.querySelectorAll('.about')[j].style.MozTransitionDuration = '.4s'; 
			document.querySelectorAll('.about')[j].style.MozTransitionDelay = (j/30) +'s';
			
			document.querySelectorAll('.about')[j].style.OTransitionDuration = '.4s'; 
			document.querySelectorAll('.about')[j].style.OTransitionDelay = (j/30) +'s';
			
			document.querySelectorAll('.about')[j].style.MsTransitionDuration = '.4s'; 
			document.querySelectorAll('.about')[j].style.MsTransitionDelay = (j/30) +'s';
			
			document.querySelectorAll('.about')[j].style.TransitionDuration = '.4s'; 
			document.querySelectorAll('.about')[j].style.TransitionDelay = (j/30) +'s';
			
			document.querySelectorAll('.about')[j].style.marginTop = '0px';	
			document.querySelectorAll('.about')[j].style.opacity = '1';	
		}
		$('#desc').css('opacity','0');
		$('#about').css('opacity', '.5');
	}
	function closeabout(){
		for(var j=0 ; j<5 ; j++){
			document.querySelectorAll('.about')[j].style.webkitTransitionDuration = '.3s'; 
			document.querySelectorAll('.about')[j].style.webkitTransitionDelay = (j/50) +'s'; 
			
			document.querySelectorAll('.about')[j].style.MozTransitionDuration = '.3s'; 
			document.querySelectorAll('.about')[j].style.MozTransitionDelay = (j/50) +'s'; 
			
			document.querySelectorAll('.about')[j].style.OTransitionDuration = '.3s'; 
			document.querySelectorAll('.about')[j].style.OTransitionDelay = (j/50) +'s'; 
			
			document.querySelectorAll('.about')[j].style.MsTransitionDuration = '.3s'; 
			document.querySelectorAll('.about')[j].style.MsTransitionDelay = (j/50) +'s'; 
			
			document.querySelectorAll('.about')[j].style.TransitionDuration = '.3s'; 
			document.querySelectorAll('.about')[j].style.TransitionDelay = (j/50) +'s'; 
			
			document.querySelectorAll('.about')[j].style.marginTop = '-50px';
			document.querySelectorAll('.about')[j].style.opacity = '0';	
			}	
		$('#desc').css('opacity','1');
		$('#about').css('opacity', '1');
	}
	
$('#about').click(
function (){
	
	if(btn == true){	
		openabout();		
		btn = false;
	}else{
		closeabout();			
		btn = true;
	}
})

$('#logo').click(
	function(){
		if(btn == false){
			closeabout();
			btn = true;
		}
	}
)
$('.thumb').click(
	function(){
		if(btn == false){
			closeabout();
			btn = true;
		}
	}
)



})

function disp(iframe){
			
	$('#bottom').css('top','690px');
	$('#hello').css({
		top: '-300px',
		opacity: '0'
	})
	
	$('#loaderanim').css('opacity','1')
	
	$('html, body').animate({scrollTop:0}, 'fast');
			

	$('#zone').remove();
	

	
	$(document.createElement('div')).attr({
		id: 'zone'
	}).prependTo($('#content'));
	
	$(document.createElement('iframe')).attr({
				src: "./" + iframe + "/index.html",
				name: 'n_'+ iframe,
				id: iframe,
				'class': 'iframe',
				width: "800px",
				height: "600px"	
		}).prependTo($('#zone'));
		
	document.getElementById(iframe).style.opacity = '0';
		

	$(document).bind('coverloaded', function(){
		console.log('COVERLOADED ??')
		setTimeout( function(){
			document.getElementById(iframe).style.opacity = '1';
		}, 100);
	})

		$('.thumb').css('opacity','1');
		document.querySelector('.'+iframe).style.opacity = .5;

		
	$('#logo').click(
		function(){
				$('#loaderanim').css('opacity','0');				
				$('.iframe').css('margin-top','350px');
				
				setTimeout( function(){
					$('#zone').remove();
				}, 150);
				
				$('#bottom').css('top','320px')

				$('#hello').css({
					top: '15px',
					opacity: '1'
					})
				
				$('html, body').animate({scrollTop:0}, 'fast');
				
				$('.thumb').css('opacity','1');

		}
	)
	
}

