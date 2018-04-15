const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
console.log(context.sampleRate);
console.log(context.destination.channelCount);

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

var now = context.currentTime;
gain.gain.setValueAtTime(1, now);
gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);


// 440 is the default can get up to around 8,000- don't do that!
oscillator.frequency.value = 40;

//traditional sound wave types:  //you can create your own?!
//oscillator.type ='sine';
//oscillator.type ='square';
//oscillator.type ='sawtooth';
//oscillator.type ='triange';


//turn on oscillator
oscillator.start(now);
//gain.volume.value = 22;
oscillator.stop(now + 0.5);
//once you stop an oscillator you can't restart it, you have to 'get another one' 

//remember to disconnect oscillators you're not using to save memory when running programs 
oscillator.disconnect(9);


/*frequency = notes
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
*/

console.log("play!");