document.getElementById("body").addEventListener('keypress', keyplay);

const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
console.log(context.sampleRate);
console.log(context.destination.channelCount);

function keyplay() {
    // think of the destination as your amplifier
    context.destination;

    //oscillator creates a sound wave
    const oscillator = context.createOscillator();
    const gain = context.createGain();


    //connect your oscillator to your amplifier
    oscillator.connect(context.destination);

    //connect oscillator to the gain node
    oscillator.connect(gain);
    //connect gain node to destination
    gain.connect(context.destination);
    oscillator.start(now);



    var now = context.currentTime;
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);


    // 440 is the default can get up to around 8,000- don't do that!
    //var paramRef = param.setTargetAtTime(target, startTime, timeConstant);

    oscillator.frequency.value = 40;

    //traditional sound wave types:  //you can create your own?!
    //oscillator.type ='sine';
    //oscillator.type ='square';
    //oscillator.type ='sawtooth';
    oscillator.type = 'triange';
    gain.value = 2; //this isn't connecting



    //turn on oscillator
    oscillator.stop(now + 0.5);
    //once you stop an oscillator you can't restart it, you have to 'get another one' 


    //remember to disconnect oscillators you're not using to save memory when running programs 
    oscillator.disconnect(context.destination);
}



/*
$(document).ready(function () {

    $('body').on('keypress', function(e) {

      var key = e.which;
      var io  = e.type=="keydown" ? 0 : 1; // "0"if keydown; "1" if keyup
      var keyAction = {                    // Object to store our stuff
//  keyCode : [keypress]
        82  : [keyplay();]            // R key
      };
      var propObj = {};                    // Object to store property + value for jQuery methods
      var keyArr = keyAction[key];

      if(typeof keyArr != 'undefined') {   // Test keyArr (82, 66) is returned/populated to prevent errors
         propObj.background = keyAction[key][io];   // Created the jQ Method's object e.g: {background:"red"}
         $(this).css(propObj);             // Finally create / use 
      }

    });

});


*/









/*


------------------------------------

frequency = notes
key of A
220 A3
440 A4
880 A5
dividing each into an equal 12 pieces to create the notes will create an instrument that sounds great in only one key. 
*/

/*
using octavian open source library example:

const note = new Ocatvian.Note(A#4)
note.frequency;
note.letter;
note.modifier;
note.octave;
note.signature;
note.pianoKey;
note.downOctave();
note.minorSecond();
note.majorSecond();
note.minorThird();
note.majorThird();
note.perfectFourth();
note.diminishedFifth();
note.perfectFifth();
note.minorSixth();
note.majorSixth();
note.minor..


-------------------------------------------
*/