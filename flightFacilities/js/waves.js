$(document).ready(function(){
	
	for( var i=0; i<34; i++){
	$(document.createElement('div')).attr({
					class: "waveContent",
					style: "-webkit-transform: rotate(" + 10*i +"deg); opacity: "+ (i/35 +.5)
				}).prependTo($('#allwaves'));
	
	$(document.createElement('div')).attr({
					class: "wave",
					style: "border-width: "+ (i/35*4 +.9)  + "px"
				}).prependTo($('.waveContent:nth-of-type(1)'));
}
});