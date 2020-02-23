window.onload = function(){
	var patterns = ['yellow',	//0
					'violet',	//1
					'red',		//2
					'green',	//3
					'cyan',		//4
					'blue',		//5
					'black'		//6
					]
	
	var colors = [
		[
			1,4,0,3,2,0,4,1,0,3,0,4,3,0,1,0,3,0,1,4,1,3,2,4,0,3,2,0,4,1,0,3,0,4,3,0,4,0
		],
		[
			4,2,3,1,4,2,0,3,1,4,2,4,2,3,1,4,2,0,3,1,4,2,4,2,3,1,4,2,0,3,1,4,2,4,2,3,1,4
		],
		[
			3,4,0,2,0,1,4,1,3,2,0,3,4,0,2,0,1,4,0,3,2,0,3,4,0,2,0,1,4,1,0,2,0,3,4,0,2,0
		],
		[
			1,4,2,3,2,4,4,1,3,3,4,4,0,1,4,2,3,0,0,4,1,3,2,4,2,3,2,4,4,1,0,0,0,0,3,1,4,2
		],
		[
			4,2,3,1,0,2,4,2,1,4,2,4,2,3,1,4,0,4,3,1,4,2,4,2,3,1,4,2,1,0,0,2,0,2,2,3,1,4
		],
		[
			3,4,0,0,1,3,0,0,0,0,0,3,4,0,2,0,1,4,1,0,2,0,3,0,0,2,0,1,4,1,1,0,2,0,0,2,4,2
		],
		[
			3,2,4,0,0,2,4,0,0,0,4,2,0,0,0,0,0,0,4,0,0,0,0,0,2,3,1,0,2,0,0,2,4,1,1,3,0,3
		],
		[
			1,3,2,3,0,3,0,2,1,3,0,0,1,0,2,3,0,4,0,0,0,1,4,0,4,0,2,0,1,0,0,3,0,0,0,0,4,1
		],
		[
			0,2,4,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,2,0,0,3,0,2
		],
		[
			4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,4
		],
		[
			2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,2,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,2,4,0,0,0,4,0,0,0,0,0,0,2,0,0
		],
		[
			0,1,6,6,6,2,6,0,6,2,4,6,6,6,4,1,0,6,6,0,0,6,6,6,6,0,6,2,6,6,4,6,6,6,6,1,0,0
		],
		[
			0,0,2,6,2,4,6,0,6,6,3,6,6,4,0,0,0,3,6,0,2,6,0,4,6,3,6,0,0,4,0,0,2,6,0,0,0,0
		],
		[
			0,0,4,6,4,2,6,6,6,2,4,6,6,6,4,0,0,6,6,0,3,6,3,2,6,6,6,6,6,6,3,0,4,6,0,0,0,0
		],
		[
			0,0,2,6,0,3,6,3,6,6,1,6,6,0,0,0,0,3,6,0,6,4,1,6,6,4,0,1,0,6,2,0,2,6,0,0,0,0
		],
		[
			0,0,4,6,4,2,6,3,6,2,4,6,6,2,6,1,0,6,6,6,6,6,6,2,0,2,6,6,6,2,0,0,6,6,4,0,0,0
		],
		[
			0,0,0,0,0,0,0,3,0,3,0,1,0,3,0,0,0,0,0,0,0,0,0,0,4,1,0,3,0,0,0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,3,0,4,0,4,0,4,0,0,0,0,0,1,0,0,0,3,2,0,0,0,0,0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,6,3,6,6,2,6,6,6,6,4,1,6,6,0,0,6,6,6,6,0,6,6,6,0,0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,3,6,4,6,4,2,6,2,3,1,5,6,6,0,0,2,0,6,5,2,6,3,4,0,0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,6,6,6,3,1,6,6,6,2,4,6,6,6,6,0,0,2,6,2,6,6,6,6,4,0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,3,6,4,6,4,6,6,1,1,2,6,0,5,6,0,0,6,6,4,2,1,0,6,0,0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,6,6,6,4,0,6,6,6,6,6,6,0,2,6,2,0,2,6,2,6,6,6,2,0,0,0,0,0,0,0,0,0
		],
		[
			4,0,0,2,0,0,0,2,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,2,4,0,0,0,4,0,0,0,0,0,0,0,2,4
		],
		[
			0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,2
		],
		[
			1,3,0,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,1
		],
		[
			3,0,4,2,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,3,0,2,1,3,0,3
		],
		[
			1,0,2,4,0,2,0,1,0,0,4,0,3,0,4,2,4,0,0,0,2,0,0,0,2,0,2,0,1,3,0,0,4,0,3,2,4,2
		],
		[
			2,0,0,3,1,0,2,3,4,1,0,0,0,4,0,0,2,3,1,4,1,0,0,0,0,3,0,2,0,0,0,3,2,0,0,4,3,1
		],
		[
			0,1,0,2,0,2,4,0,0,0,1,3,2,1,0,2,0,1,0,0,0,2,0,1,0,2,4,1,0,0,3,0,4,0,0,1,0,2
		],
		[
			2,4,1,0,0,3,1,4,1,0,0,0,4,3,0,1,0,1,2,4,0,3,2,4,1,0,2,3,1,4,1,4,0,0,4,3,4,1
		],
		[
			4,1,3,2,4,2,4,1,3,0,0,0,1,3,2,4,2,4,0,3,0,2,4,1,0,2,0,2,4,1,3,0,0,4,1,3,2,4	
		],
		[
			0,2,0,0,3,0,2,3,1,4,1,0,2,0,4,0,0,2,3,1,4,1,0,2,0,4,3,0,2,3,1,4,1,0,2,0,4,3
		],
		[
			2,0,1,0,2,4,1,3,0,2,4,1,3,2,1,0,2,3,1,4,1,0,2,0,1,0,2,4,1,3,0,2,4,1,3,2,1,0
		],
		[
			3,2,4,1,0,2,3,1,4,1,0,2,0,4,3,3,1,3,0,2,4,1,3,2,4,1,0,2,3,1,4,1,0,2,0,4,3,0
		]
	] ;
	
	var total = 38 ;
	var size = 19 ;
	var squares = [] ;
	var viewport = document.getElementById('cover') ;
	
	var lenY = colors.length ;
	for (var j = 0; j < lenY ; j++){
		var lenX = colors[j].length ;
		for (var i = 0; i < lenX ; i++){
			
			// j = which row
			// i = which index in row
			
			var fill = patterns[colors[j][i]] ;
			
			var div = viewport.appendChild(document.createElement('div')) ;
			
			div.className = 'square ' + fill ;
			div.style.left = size * i + 'px' ;
			div.style.top = size * j + 'px' ;
			
			
			squares[squares.length] = div ;
			
			//console.log(div)
			
		}
	}	


/* IMPORTANT:
	Déclaration de tes variables en selectionnant les div qui vont te servir
	• var class = document.querySelector('.class') 
			> selectionne une div avec une .class
	• var class = document.querySelectorAll('.class') 
			> selectionne toutes les div ayant cette .class, à priori d'en l'ordre du code (tu peux y accéder après avec class[i]
*/

var square = document.querySelectorAll('.square');



var STAGES = [
  function() {

    ctx.fillStyle = 'black';
    goCmd.className = '';

  }
];
function runCmd(el) {
  if (typeof el == 'string') {
    var func = el;
  } else {
    var func = el.dataset.func.toLowerCase();
  }
  sound[func]();
  el.disabled = !el.disabled;
  switch (func) {
    case 'play':
      document.querySelector("[data-func='pause']").disabled = false;
      break;
    case 'pause':
      document.querySelector("[data-func='play']").disabled = false;
      break;
    default:
      // noop
  }
}

function Sound() {
  const MIX_TO_MONO = false;
  const NUM_SAMPLES = 2048;

  var self_ = this;
  var context_ = new (window.AudioContext || window.webkitAudioContext)();
  var source_ = null;
  var jsProcessor_ = null;
  var analyser_ = null;
  var viewTimeDomain_ = false;

  var viewportOffset_ = 50 //document.getElementById('viewport-offset');

  var ftimer = 0;
  var bd = new BeatDetektor();
  var vu = new BeatDetektor.modules.vis.VU();
  var portion = 0;

  var processAudio_ = function(e) {

    // Get left channel input. No need for output arrays. They're hooked up
    // directly to the destination, and we're not doing any processing.
    var inputArrayL = e.inputBuffer.getChannelData(0);

    var freqByteData = new Uint8Array(analyser_.frequencyBinCount);

    if (viewTimeDomain_) {
      analyser_.getByteTimeDomainData(freqByteData);
    } else {
      analyser_.getByteFrequencyData(freqByteData);
      //analyser_.fftSize = 2048;
    }
    
     bd.process(context_.currentTime, inputArrayL);
      ftimer += bd.last_update;
      if (ftimer > 1.0 / 24.0) {
        vu.process(bd, ftimer);
        ftimer = 0;
      }
      
      
      /* Une des premières variables à utiliser, mais assez limitée (vu.vu_levels) 

      if (vu.vu_levels.length) {
        var z = vu.vu_levels[0];
        }
        //redline.style.webkitTransform = 'rotate(' + ( 9 + 100 * z ) + 'deg) skewy(88.8deg)';
		*/
		
    self_.renderFFT('goCmd', freqByteData);

  };


/* IMPORTANT#2

ici tu peux agir sur le CSS en utilisant ta_variable.style.ta_propriété = ...
(en remplaçant les mots composés type background-color par backgroundColor)
j'ai rajouté des boucles pour quand tu utilise querySelectorAll, ça marche plutot bien plutot que de créer plein de class

freqByteData[i] ça semble être la valeur de la fréquence du son en x = i, avec xmax ≃ 800 (mais pas dit)
*/


  this.renderFFT = function(format, freqByteData) {
      freqByteData = freqByteData.subarray(200);
      

      for (var i = 0; i <1400 ; ++i){
      	square[20].style.webkitTransform = 'scale(' + freqByteData[20]/100 + ')'
	 	};
	 	};


  this.initAudio = function(arrayBuffer) {
    if (source_) {
      runCmd('pause');
    }

    source_ = context_.createBufferSource();
    source_.buffer = context_.createBuffer(arrayBuffer, MIX_TO_MONO /*mixToMono*/);
    source_.looping = true;

    // This AudioNode will do the amplitude modulation effect directly in JavaScript
    jsProcessor_ = context_.createJavaScriptNode(NUM_SAMPLES /*bufferSize*/, 1 /*num inputs*/, 1 /*num outputs*/);
    jsProcessor_.onaudioprocess = processAudio_;

    analyser_ = context_.createAnalyser();

    source_.connect(context_.destination);

    document.querySelector("[data-func='play']").disabled = false;
  };

  this.load = function(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function(e) {
      self_.initAudio(request.response);
    };
    request.send();
  };

  this.play = function() {
    if (!source_) {
      sound.load('backup.mp3');
    } else {               
      source_.connect(context_.destination);
      source_.connect(analyser_);

      analyser_.connect(jsProcessor_);
      jsProcessor_.connect(context_.destination);

      source_.noteOn(0);
    }
  };

  this.pause = function() {
    //source_.noteOff(0);
    source_.disconnect(0);
    jsProcessor_.disconnect(0);
    analyser_.disconnect(0);

  };
}

var sound = new Sound();
sound.load('backup.mp3');
}
