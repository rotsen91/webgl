
function orange() {
    
    $('canvas').css('height', '100vh').css('width', '100%')
   
}

function green() {
    // $('canvas').css('height', '100vh')
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