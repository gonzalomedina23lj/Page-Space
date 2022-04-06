let earth = document.getElementById('earth')
let satellite = document.getElementById('satellite')
let jupiter = document.getElementById('jupiter')
let sun = document.getElementById('sun')
let moon = document.getElementById('moon')
let spaceship = document.getElementById('spaceship')

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    earth.style.top = value * 0.2 + 'px';
    satellite.style.marginTop = value * -0.6 + 'px';
    sun.style.marginRight = value * -0.3 + 'px'; 
    sun.style.top = value * -0.2 + 'px';
    moon.style.marginRight = value * -0.3 + 'px'; 
    moon.style.marginTop = value * -0.4 + 'px';
    /* moon.style.width = value * -10 + 'px'; */
    jupiter.style.marginTop = value * -0.4 + 'px';
    jupiter.style.marginLeft = value * -0.4 + 'px';
    spaceship.style.marginLeft = value * 0.8 + 'px';
    
})