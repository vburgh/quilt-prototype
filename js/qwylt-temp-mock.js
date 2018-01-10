

//mock data
var quiltDetails = [
	{
		id: 1,
		name: "Hello World",
		url: "q.html"
	},
	{
		id: 2,
		name: "Top Rated - Feb 2018",
		url: "q2.html"
	}
]

var patches = [
	{
		id: 1,
		quiltId: 1,
		coorX: 1,
		coorY: 1,
		name: "Vin",
		img: "images/patches/nature1.jpg",
		userId: 10
	}, 
	{
		id: 2,
		quiltId: 1,
		coorX: 1,
		coorY: 0,
		name: "Lizzy",
		img: "images/patches/nature2.jpg",
		userId: 21
	}, 
	{
		id: 3,
		quiltId: 1,
		coorX: 0,
		coorY: 1,
		name: "Joey",
		img: "images/patches/nature3.jpg",
		userId: 10
	}, 
	{
		id: 4,
		quiltId: 1,
		coorX: 0,
		coorY: -1,
		name: "Gypsy",
		img: "images/patches/nature4.jpg",
		userId: 21
	}, 
	{
		id: 5,
		quiltId: 1,
		coorX: 0,
		coorY: -2,
		name: "Charlie",
		img: "images/patches/nature5.jpg",
		userId: 10
	}, 
	{
		id: 6,
		quiltId: 1,
		coorX: -1,
		coorY: 0,
		name: "Pixel",
		img: "images/patches/nature6.jpg",
		userId: 10
	}, 
	{
		id: 7,
		quiltId: 1,
		coorX: -1,
		coorY: -1,
		name: "Ann",
		img: "images/patches/nature11.jpg",
		userId: 21
	}, 
	{
		id: 8,
		quiltId: 1,
		coorX: -1,
		coorY: 1,
		name: "Foo",
		img: "images/patches/nature8.jpg",
		userId: 10
	}, 
	{
		id: 9,
		quiltId: 1,
		coorX: -2,
		coorY: 0,
		name: "Fuzz",
		img: "images/patches/nature9.jpg",
		userId: 21
	}, 
	{
		id: 10,
		quiltId: 1,
		coorX: 0,
		coorY: 2,
		name: "Fat",
		img: "images/patches/nature10.jpg",
		userId: 10
	}, 
	{
		id: 11,
		quiltId: 2,
		coorX: 1,
		coorY: 0,
		name: "Fat",
		img: "images/patches/nature10.jpg",
		userId: 21
	}, 
	{
		id: 12,
		quiltId: 2,
		coorX: 1,
		coorY: 1,
		name: "Fat",
		img: "images/patches/nature1.jpg",
		userId: 10
	}
];

var users = [
	{
		id: 10,
		name: "Vin Burgh",
		avatar: "images/avatars/vb.jpg"
	},
	{
		id: 21,
		name: "Bob",
		avatar: "images/avatars/bob.png"
	}
]

var comments = [
	{
		id: 1,
		patchId: 1,
		userId: 10,
		text: "something something",
		timestamp: 1
	},
	{
		id: 2,
		patchId: 1,
		userId: 10,
		text: "something something",
		timestamp: 2
	},
	{
		id: 3,
		patchId: 1,
		userId: 21,
		text: "something something",
		timestamp: 3
	},
	{
		id: 4,
		patchId: 2,
		userId: 21,
		text: "something something",
		timestamp: 4
	}
]