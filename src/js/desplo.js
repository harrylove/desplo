var d;
var desploing = false;
var desploAnim;
var container = document.getElementById('desploContainer');
var url = document.getElementById('url');
var colors = [
    'red',
    'cyan',
    'blue',
    'green',
    'yellow',
    'black',
    'white',
    'orange',
    'purple'
];
var m = { x: 0, y: 0 };

var dContent = [
    'DESPLO',
    'desplo',
    'DeSpLo',
    'dEsPlO',
    'DES PLO',
    'DES plo',
    'des PLO',
    'desplO',
    'DEsplo',
    'deSPLO',
    'SPLO des?',
    'desdessplo',
];

document.addEventListener('mousemove', function(e) {
    m.x = e.pageX - container.offsetLeft;
    m.y = e.pageY - container.offsetTop;
});

var getStyle = function() {
  	var shadow = _.random(-7,7) + 'px ' + _.random(-7,7) + 'px ' + _.random(-7,7) + 'px ' + colors[_.random(colors.length - 1)];
	return {
	    left: m.x + 'px',
	    top: m.y + 'px',
	    color: colors[_.random(colors.length - 1)],
	    fontSize: _.random(6,42) + 'px',
	    opacity: Math.random(),
	    textShadow: shadow
	};  
};

var desplo = function() {
    desploAnim = window.requestAnimationFrame(function() {
	d = document.createElement('div');
	d.className = 'desplo';
	d.innerHTML = dContent[_.random(dContent.length - 1)];
	d.style = _.extend(d.style, getStyle());
	container.appendChild(d);
	desplo();
    });    
};

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 68 && desploAnim) {
	window.cancelAnimationFrame(desploAnim);
	desploing = false;
    }
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 68 && !desploing) {
	desploing = true;
	desplo();
    }
});

document.getElementById('getUrl').addEventListener('submit', function(e) {
    e.preventDefault();
    if (url.value.length) {
	load.src = url.value;
    }
});

document.getElementById('clear').addEventListener('click', function(e) {
    e.preventDefault();
    container.innerHTML = '';
});
