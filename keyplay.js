document.getElementById('window').addEventListener("keydown", play);


function play(event){
                        console.log('is this thing on?');

    var k = event.play;
    if (k == 8) {

        oscillator.start(now);
        oscillator.stop(now = 0.4);

        };
        
};

//play();