var planeElement = document.getElementById('plane'),
	planeTopPos = planeElement.scrollTop,
	planeLeftPos = planeElement.scrollLeft;


var testy = false;

document.getElementById('content').addEventListener('click', function(){
	if (testy===false) {
		document.getElementById('contain2').classList.add('active');
		document.getElementById('contain2').scrollTo(0,400);
		testy = true;
	} else {
		document.getElementById('contain2').classList.remove('active');
		document.getElementById('contain2').scrollTo(0,0);
		testy = false;
	}
});




document.addEventListener('click', function(){document.getElementById('mainPatch').classList.remove('intro');});

document.querySelector('button.btn-nav-up').addEventListener('click', moveUpPlane);

document.querySelector('button.btn-nav-down').addEventListener('click', moveDownPlane);

document.querySelector('button.btn-nav-left').addEventListener('click', moveLeftPlane);

document.querySelector('button.btn-nav-right').addEventListener('click', moveRightPlane);


function moveUpPlane () {
	planeTopPos = Number(planeTopPos) + Number(300);
	planeElement.style.setProperty('top', planeTopPos + 'px');
}

function moveDownPlane () {
	planeTopPos = Number(planeTopPos) - Number(300);
	planeElement.style.setProperty('top', planeTopPos + 'px');
}

function moveLeftPlane () {
	planeLeftPos = Number(planeLeftPos) + Number(300);
	planeElement.style.setProperty('left', planeLeftPos + 'px');
}

function moveRightPlane () {
	planeLeftPos = Number(planeLeftPos) - Number(300);
	planeElement.style.setProperty('left', planeLeftPos + 'px');
}





//touch gestures
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(event) {                                         
    xDown = event.touches[0].clientX;                                      
    yDown = event.touches[0].clientY;                                      
};                                                

function handleTouchMove(event) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = event.touches[0].clientX;                                    
    var yUp = event.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
			moveRightPlane();
        } else {
			moveLeftPlane();
        }                       
    } else {
        if ( yDiff > 0 ) {
			moveDownPlane();
        } else { 
			moveUpPlane();
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};






/*
var body = document.querySelector('body');
var header = document.querySelector('header[role="banner"]');

console.log(header.scrollLeft, header.scrollTop);

window.addEventListener('scroll', function() {
	if (body.scrollTop > 100) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
});
*/