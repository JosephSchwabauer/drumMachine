import context from './drumMachineContext.js';
import Oscillator from './drumMachineContext.js';
import Octavian from 'octavian';

const notes = {};

export default {
    oscillatorfor(note, destination = context.destination){
     const frequency = new Octavian.Note(note).frequency;
        if(!notes[frequncey]) = new Octavian(frequency, destination);
    }
    return notes[frequency];
    }
}