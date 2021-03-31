function red() {
    $('div').css('background','#B60C0C')
    .text('Screen Size RED');
}

function orange() {
    $('div').css('background','#EBAE10')
    .text('Screen Size ORANGE');
}

function green() {
    $('div').css('background','#83ba2b')
    .text('Screen Size GREEN');
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
window.onresize = resizeFn;
resizeFn();