$(document).ready(function() {
    $(".header-big").lettering();
    $(".header-div1").lettering();
    $(".header-small").lettering();
  });


$(document).ready(function() {
    animation("header-big")
    animation("header-div1");
    setTimeout(function(){ animation("header-small");}, 2000);

})

function animation(target) {
    var element = document.getElementById(target);
    var title1 = new TimelineMax();
    element.style.opacity = 1;
    title1.staggerFromTo('.'+target+" span", 0.5,
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
}


