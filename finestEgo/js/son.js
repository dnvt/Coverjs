$(document).ready(function() {
function TRACE(t) {
  //return false;  // trigger pour avoir des traces ou non

  try {
    var node = document.getElementById('TRACES');
    var hr = document.createElement('hr');
    node.appendChild(document.createTextNode(t));
    node.appendChild(hr);
  } catch (e) {
    try {
      console.log(t);
    } catch (e) {
      alert(t);
    }
  }
}


  var jaune = document.querySelector('#jaune');
  var bleuClair1 = document.querySelector('#bleuClair1');
  var bleuClair2 = document.querySelector('#bleuClair2');
  var bleuClair3 = document.querySelector('#bleuClair3');
  var bleuSombre = document.querySelector('#bleuSombre');
  var canvas = document.querySelector('#canvas');
  var gray = document.querySelectorAll('.gray');
  var pos = document.querySelectorAll('.pos');



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
      document.querySelectorAll("[data-func='pause']").disabled = false;
      break;
    case 'pause':
      document.querySelector("[data-func='play']").disabled = false;
      document.querySelectorAll("[data-func='play']").disabled = false;
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

      if (vu.vu_levels.length) {
        var z = vu.vu_levels[0];
        }
        //redline.style.webkitTransform = 'rotate(' + ( 9 + 100 * z ) + 'deg) skewy(88.8deg)';


    self_.renderFFT('goCmd', freqByteData);

  };

  this.renderFFT = function(format, freqByteData) {
      freqByteData = freqByteData.subarray(156);

      jaune.style.height = (220 + freqByteData[156] / 2) + 'px';
      jaune.style.backgroundColor = 'rgb(241, 195, 72)';

      bleuClair1.style.height = (30 + freqByteData[156] / 2) + 'px';
      bleuClair1.style.top = (502 - 1.5 * freqByteData[156]) + 'px';

      bleuClair2.style.height = (15 + freqByteData[156] / 3) + 'px';
      bleuClair2.style.top = (511 - freqByteData[156] / 2) + 'px';

      bleuClair3.style.height = (20 + freqByteData[156]) + 'px';
      bleuClair3.style.top = (521 - freqByteData[156] / 12) + 'px';

      bleuSombre.style.height = (100 + freqByteData[156] / 2) + 'px';
      bleuSombre.style.top = (541 - freqByteData[156] / 3) + 'px';
  
      
      trace(freqByteData.subarray(156));
      

      for (var i = 1; i < 50 ; ++i){
        trace(i);
        pos[i].style.marginLeft = i + 2 + 'px';
        pos[i].style.marginTop = i + 2 + 'px';
      }
        
    }

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
      sound.load('son/witchHunt.mp3');
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
sound.load('son/witchHunt.mp3');
});
