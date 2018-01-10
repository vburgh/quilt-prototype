var body = document.querySelector('body'),
	planeElement = document.getElementById('plane'),
	planeTopPos = planeElement.scrollTop,
	planeLeftPos = planeElement.scrollLeft,
	patchUnit = 300;


var zoom = false;
var overlay = false;

function getPatch(x) {
	return patches[x];
}

function getUser(x) {
	return users[x];
}

function viewPatch(x) {

	var user = users.find(users => users.id === getPatch(x).userId);

	return function(){
		if(zoom) {
			document.getElementById('collection').classList.remove('zoom-out');

			planeTopPos = (getPatch(x).coorY) * -patchUnit,
			planeLeftPos = (getPatch(x).coorX) * -patchUnit;
			planeElement.style.setProperty('top', planeTopPos + 'px');
			planeElement.style.setProperty('left', planeLeftPos + 'px');			
		}


		if(!zoom) {
			setTimeout(function(){
			document.querySelector('.overlay').style.display = "block";
			document.querySelector('.overlay img.showcase').src = getPatch(x).img;
			document.querySelector('.overlay h2').textContent = getPatch(x).name;
			document.querySelector('.overlay span').textContent = getPatch(x).id;

			document.querySelector('.overlay p').textContent = user.name;
			document.querySelector('.overlay img.avatar').src = user.avatar;

			for (var j = 0; j < comments.length; j++) {

				var comment = comments[j];

				if(comment.patchId === getPatch(x).id) {
					document.querySelector('ul.comments').innerHTML += '<li>' + comment.text + '</li>';
				} else {
					document.querySelector('ul.comments').innerHTML += '';
				}
			}

			document.querySelector('.overlay').addEventListener('click', closeOverlay);
			document.querySelector('.overlay').scrollTo(0,0);

			overlay = true;
		},0);
		}
		zoom = false;
	}
}

function init(){
	var patchEl = document.querySelectorAll('.patch');

	for(var i = 0; i < patchEl.length; i++) {
		patchEl[i].addEventListener('click', viewPatch(i));
	}


}

window.addEventListener('load', function(){
	for (var h = 0; h < quiltDetails.length; h++) {
		var quilt = quiltDetails[h];

		document.getElementById('individual-quilts').innerHTML += '<li><a href="' + quilt.url + '">' + quilt.name + '</a></li>';
	}


	for (var i = 0; i < patches.length; i++) {
		var patch = patches[i];

		if(patch.quiltId === quiltDetails.id) {
			patchHtml = '' +
			'<div class="patch" style="left:' + (patch.coorX * 300) + 'px; top: ' + (patch.coorY * 300) + 'px;">' +
			'	<img src="' + patch.img + '" title="' + patch.name + ' - ' + patch.id + '">' + 
			'	<a href="#" class="view-patch"><img src="' + users.find(users => users.id === patch.userId).avatar + '" class="avatar" /> ' + users.find(users => users.id === patch.userId).name + '</a>' +
			'</div>';
			planeElement.innerHTML += patchHtml;
		}
	}
});

window.addEventListener('load', init);





document.querySelector('button.zoom').addEventListener('click', function(){
	if(!zoom) {
		document.getElementById('collection').classList.add('zoom-out');
		zoom = true;
	} else {
		document.getElementById('collection').classList.remove('zoom-out');
		zoom = false;
	}
});

document.querySelector('button.btn-nav-up').addEventListener('click', moveUpPlane);

document.querySelector('button.btn-nav-down').addEventListener('click', moveDownPlane);

document.querySelector('button.btn-nav-left').addEventListener('click', moveLeftPlane);

document.querySelector('button.btn-nav-right').addEventListener('click', moveRightPlane);



function closeOverlay () {
	document.querySelector('.overlay').style.display = "none";
	overlay = false;
}

function moveUpPlane () {
	planeTopPos = Number(planeTopPos) + patchUnit;
	planeElement.style.setProperty('top', planeTopPos + 'px');
}

function moveDownPlane () {
	planeTopPos = Number(planeTopPos) - patchUnit;
	planeElement.style.setProperty('top', planeTopPos + 'px');
}

function moveLeftPlane () {
	planeLeftPos = Number(planeLeftPos) + patchUnit;
	planeElement.style.setProperty('left', planeLeftPos + 'px');
}

function moveRightPlane () {
	planeLeftPos = Number(planeLeftPos) - patchUnit;
	planeElement.style.setProperty('left', planeLeftPos + 'px');
}




//touch gestures
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(event) {
	if (!overlay){
		xDown = event.touches[0].clientX;
		yDown = event.touches[0].clientY;
	}
};

function handleTouchMove(event) {
	if ( !xDown || !yDown || overlay) {
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




var testy = false,
	warp = false;

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

*/