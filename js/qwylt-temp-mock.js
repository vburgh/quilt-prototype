window.addEventListener('load', function(){
	for (i = 0; i < patches.length; i++) {
		var patch = patches[i]
		planeElement.innerHTML +='<div class="patch" style="left:' + (patch.coorX * 300) + 'px; top: ' + (patch.coorY * 300) + 'px;"><img src="' + patch.img + '" title="' + patch.name + ' - ' + patch.id + '"></div>';
	}
});


//mock data
var patches = [
	{
		id: 1,
		coorX: 1,
		coorY: 1,
		name: "Vin",
		img: "images/patches/nature1.jpg"
	}, 
	{
		id: 2,
		coorX: 1,
		coorY: 0,
		name: "Lizzy",
		img: "images/patches/nature2.jpg"
	}, 
	{
		id: 3,
		coorX: 0,
		coorY: 1,
		name: "Joey",
		img: "images/patches/nature3.jpg"
	}, 
	{
		id: 4,
		coorX: 0,
		coorY: -1,
		name: "Gypsy",
		img: "images/patches/nature4.jpg"
	}, 
	{
		id: 5,
		coorX: 0,
		coorY: -2,
		name: "Charlie",
		img: "images/patches/nature5.jpg"
	}, 
	{
		id: 6,
		coorX: -1,
		coorY: 0,
		name: "Pixel",
		img: "images/patches/nature6.jpg"
	}, 
	{
		id: 7,
		coorX: -1,
		coorY: -1,
		name: "Ann",
		img: "images/patches/nature11.jpg"
	}, 
	{
		id: 8,
		coorX: -1,
		coorY: 1,
		name: "Foo",
		img: "images/patches/nature8.jpg"
	}, 
	{
		id: 9,
		coorX: -2,
		coorY: 0,
		name: "Fuzz",
		img: "images/patches/nature9.jpg"
	}, 
	{
		id: 10,
		coorX: 0,
		coorY: 2,
		name: "Fat",
		img: "images/patches/nature10.jpg"
	}
];
