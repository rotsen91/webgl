function red() {
    $('div').css('background','#B60C0C')
    .text('Screen Size RED');
}

function orange() {
    $('canvas').css('height', screen.height - 200)
    .text('Screen Size ORANGE');
}

function green() {
    $('canvas').css('height', screen.height - 200)
    .text('Screen Size GREEN')
}


function resizeFn() {

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    
    
    orange()
    }else{
    // false for not mobile device
    green()
    }
}
// window.onresize = resizeFn;
// resizeFn();