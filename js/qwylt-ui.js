var body = document.querySelector('body'),
	planeElement = document.getElementById('plane'),
	planeTopPos = planeElement.scrollTop,
	planeLeftPos = planeElement.scrollLeft,
	patchUnit = 300;


var zoom = false;
var overlay = false;









function viewPatch(x, y) {

	return function() {

		var user = users.find(users => users.id === y);

		if(zoom) {
			document.getElementById('collection').classList.remove('zoom-out');
			zoom = false;

			planeTopPos = (patches[x-1].coorY) * -patchUnit,
			planeLeftPos = (patches[x-1].coorX) * -patchUnit;

			console.log(planeTopPos);
			console.log(planeLeftPos);

			planeElement.style.setProperty('top', planeTopPos + 'px');
			planeElement.style.setProperty('left', planeLeftPos + 'px');

		} else {

			overlay = true;

			var patchViewFragment = document.createDocumentFragment(),
				patchViewElement = document.createElement('div'),
				patchImage = document.createElement('img'),
				patchTitle = document.createElement('h2');
				patchAuthor = document.createElement('span'),
				patchAvatar = document.createElement('img');

			patchViewElement.classList.add('overlay');
			patchViewElement.style.display = 'block';

			patchImage.src = patches.find(patches => patches.id === x).img;
			patchImage.classList.add('showcase');

			patchTitle.textContent = patches.find(patches => patches.id === x).name;

			patchAvatar.src = user.avatar;
			patchAvatar.classList.add('avatar');

			patchAuthor.textContent = user.name;

			patchViewElement.appendChild(patchImage);
			patchViewElement.appendChild(patchTitle);
			patchViewElement.appendChild(patchAuthor);
			patchViewElement.appendChild(patchAvatar);

			patchViewFragment.appendChild(patchViewElement);

			body.appendChild(patchViewFragment);

			patchViewElement.addEventListener('click', function(){
				patchViewElement.parentNode.removeChild(patchViewElement);
				overlay = false;
			});

			document.querySelector('.overlay').scrollTo(0,0);
		}
	}
}


window.addEventListener('load', function(){

	for (var h = 0; h < quiltDetails.length; h++) {
		var quilt = quiltDetails[h];

		document.getElementById('individual-quilts').innerHTML += '<li><a href="' + quilt.url + '">' + quilt.name + '</a></li>';
	}

	drawQuiltView(patches, quiltDetails.id);
});


// creates all neccessary elements that make up the quilt view
// x = patch, y = quilt
function drawQuiltView (x, y) {

	for (var i = 0; i < x.length; i++) {
		if(x[i].quiltId === y) {
			var patchFragment = document.createDocumentFragment(),
				patchElement = document.createElement('div'),
				patchImage = document.createElement('img'),
				patchAuthor = document.createElement('a'),
				patchAvatar = document.createElement('img');

			var patchId = x[i].id;

			patchElement.classList.add('patch');
			patchElement.style.setProperty('left', x[i].coorX * patchUnit + 'px');
			patchElement.style.setProperty('top', x[i].coorY * patchUnit + 'px');

			patchImage.src = x[i].img;

			patchAuthor.href = "#";
			patchAuthor.classList.add('view-patch');
			patchAuthor.textContent = users.find(users => users.id === x[i].userId).name;

			patchAvatar.src = users.find(users => users.id === x[i].userId).avatar;
			patchAvatar.classList.add('avatar');

			patchElement.addEventListener('click', viewPatch(x[i].id, x[i].userId), false);

			patchAuthor.appendChild(patchAvatar);
			patchElement.appendChild(patchAuthor);
			patchElement.appendChild(patchImage);
			patchFragment.appendChild(patchElement);

			planeElement.appendChild(patchFragment);

		}
	}
}



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