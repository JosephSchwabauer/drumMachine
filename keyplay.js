
$(document).keydown(function(e){
    if(e.keyCode == 8){
        clickevent();
     }
});

function clickevent() {
    var ev = $.Event("keydown");
    ev.which = 8;
    ev.keyCode = 8;
    $(document).trigger(ev);
}


/*
function play(event){
                        console.log('is this thing on?');

    var k = event.play;
    if (k == 8) {

        oscillator.start(now);
        oscillator.stop(now = 0.4);

        };
        
};

play();

*/