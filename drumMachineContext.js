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
        } else if (key == 68) {
            snare();
        } else if (key == 86) {
            waterDrop();
        } else if (key == 81) {
            A3();
        } else if (key == 87) {
            A4();
        } else if (key == 69) {
            A5();
        } else if (key == 80) {
            kickBeat();
        }

    })
});


function kickBeat() {
    context.destination;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(context.destination);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    var now = context.currentTime;
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    oscillator.frequency.value = 240;
    gain.value = 100; //this isn't connecting
    oscillator.stop(now + 0.5);
    oscillator.disconnect(context.destination);

    var now = context.currentTime;
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    oscillator.frequency.value = 450;
    oscillator.type = 'sine';
    gain.value = 100; //this isn't connecting
    oscillator.stop(now + 0.5);
    oscillator.disconnect(context.destination);
}

function kick() {
    context.destination;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(context.destination);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    var now = context.currentTime;
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    oscillator.frequency.value = 40;
    gain.value = 100; //this isn't connecting
    oscillator.stop(now + 0.5);
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
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    oscillator.frequency.value = 2650;
    oscillator.type = 'sawtooth';
    gain.value = 1; //this isn't connecting
    oscillator.stop(now + 0.5);
    oscillator.disconnect(context.destination);
}

function snare() {
    context.destination;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(context.destination);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);

    var now = context.currentTime;
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    oscillator.frequency.value = 1450;
    oscillator.type = 'sine';
    gain.value = 1; //this isn't connecting
    oscillator.stop(now + 0.5);
    oscillator.disconnect(context.destination);
}

function clearBell() {
    context.destination;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(context.destination);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);

    var now = context.currentTime;
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    oscillator.frequency.value = 2000;
    oscillator.type = 'square';
    gain.value = 1; //this isn't connecting
    oscillator.stop(now + 0.5);
    oscillator.disconnect(context.destination);
}

function waterDrop() {
    context.destination;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(context.destination);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);

    var now = context.currentTime;
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    oscillator.frequency.value = 2000;
    oscillator.type = 'sine';
    gain.value = 1; //this isn't connecting
    oscillator.stop(now + 0.5);
    oscillator.disconnect(context.destination);
}

function A3() {
    context.destination;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(context.destination);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);

    var now = context.currentTime;
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    oscillator.frequency.value = 220;
    oscillator.type = 'sine';
    gain.value = 1; //this isn't connecting
    oscillator.stop(now + 0.5);
    oscillator.disconnect(context.destination);
}

function A4() {
    context.destination;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(context.destination);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);

    var now = context.currentTime;
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    oscillator.frequency.value = 440;
    oscillator.type = 'sine';
    gain.value = 1; //this isn't connecting
    oscillator.stop(now + 0.5);
    oscillator.disconnect(context.destination);
}

function A5() {
    context.destination;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(context.destination);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);

    var now = context.currentTime;
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    oscillator.frequency.value = 880;
    oscillator.type = 'sine';
    gain.value = 1; //this isn't connecting
    oscillator.stop(now + 0.5);
    oscillator.disconnect(context.destination);
}

/*
    //traditional sound wave types:  //you can create your own?!
    //oscillator.type ='sine';
    //oscillator.type ='square';
    //oscillator.type ='sawtooth'

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


/*

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
    gain.value = 1; //this isn't connecting
    //turn on oscillator
    oscillator.stop(now + 0.5);
    //once you stop an oscillator you can't restart it, you have to 'get another one' 
    //remember to disconnect oscillators you're not using to save memory when running programs 
    oscillator.disconnect(context.destination);
}

*/
