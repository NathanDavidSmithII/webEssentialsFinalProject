var $ = require('jquery');
$(document).ready(function () {
    $('#navMenu').load('./partial_nav.html');
});

require('bootstrap/dist/js/bootstrap');
require('./node_modules/bootstrap/dist/css/bootstrap.css');
let Particles = require('particlesjs');
let particleHome = {
    selector: '.background',
    connectParticles: true,
    speed: 5,
    color: ['#7FFF00', '#DC143C', '#1E90FF'],
  };
  Particles.init(particleHome);