const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
console.log(context.sampleRate);
console.log(context.destination.channelCount);




$(document).ready(function () {

    $('body').on('keypress', function (e) {

        var key = e.which;
        if (key == 65) {
            kick();
        } else if (key == 83) {
            highHat();
        }


    })
});

function kick() {
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
    gain.value = 2; //this isn't connecting



    //turn on oscillator
    oscillator.stop(now + 0.5);
    //once you stop an oscillator you can't restart it, you have to 'get another one' 


    //remember to disconnect oscillators you're not using to save memory when running programs 
    oscillator.disconnect(context.destination);
}


function highHat() {
    context.destination;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(context.destination);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);

    var now = context.currentTime;
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    oscillator.frequency.value = 800;
    oscillator.type = 'sawtooth';
    gain.value = 2; //this isn't connecting
    oscillator.stop(now + 0.5);
    oscillator.disconnect(context.destination);
}



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
