window.addEventListener('load', iniciar, 'false');
window.addEventListener('resize', info_size, 'false');

function iniciar (){
    info_size();
}

function info_size (){
    let height = $(window).height()/1.5;
    console.log(height);
    $(".info").css("height", height+'px');
    
}