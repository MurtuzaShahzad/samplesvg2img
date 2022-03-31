var svgElement = document.getElementById("divsvg1").children[0];

var svgString = new XMLSerializer().serializeToString(svgElement);

console.log(svgString);

let URL = window.URL || window.webkitURL || window;

const blob1 = new Blob([svgString],{type:'image/svg+xml;charset=utf-8'});
const img1 = new Image();

let canvas;
document.body.append(img1);
img1.onload = () => {

	console.log("hiiiiiii");
  
   canvas = document.createElement('canvas');
   
   canvas.widht = width;
   
   canvas.height = height;
   let context = canvas.getContext('2d');
   // draw image in canvas starting left-0 , top - 0  
   context.drawImage(img1, 0, 0, width, height );
  //  downloadImage(canvas); need to implement
  img1.src = URL.createObjectURL(blob1);


let png = canvas.toDataURL(); // default png
document.write('<img src="'+png+'"/>');

console.log(png);

download(png, "image1.png");
};


var download = function(href, name){
  var link = document.createElement('a');
  link.download = name;
  link.style.opacity = "0";
  document.append(link);
  link.href = href;
  link.click();
 // link.remove();
}




/*
var svgElement = document.getElementById("divsvg1").children[0];

let {width, height} = svgElement.getBBox();

let clonedSvgElement = svgElement.cloneNode(true);
// true for deep clone

clonedSvgElement = new XMLSerializer().serializeToString(clonedSvgElement);

let blob = new Blob([clonedSvgElement],{type:'image/svg+xml;charset=utf-8'});


let URL = window.URL || window.webkitURL || window;
console.log(blob)
console.log(window.URL.createObjectURL(blob))

console.log(URL)
let blobURL = URL.createObjectURL(blob);

console.log(blobURL)
let image = new Image();
let canvas;
image.onload = () => {
  
   canvas = document.createElement('canvas');
   
   canvas.widht = width;
   
   canvas.height = height;
   let context = canvas.getContext('2d');
   // draw image in canvas starting left-0 , top - 0  
   context.drawImage(image, 0, 0, width, height );
  //  downloadImage(canvas); need to implement
  image.src = blobURL;


let png = canvas.toDataURL(); // default png
document.write('<img src="'+png+'"/>');
//download(png, "image1.png");
};


var download = function(href, name){
  var link = document.createElement('a');
  link.download = name;
  link.style.opacity = "0";
  document.append(link);
  link.href = href;
  link.click();
 // link.remove();
}

*/



/*
console.log(svg1.getBBox())

//const {x,y,width,height} = svg1.viewBox.baseVal;

const {x,y,width,height} = svg1.getBBox();
const blob = new Blob([svg1.outerHTML], {type: "image/svg+xml"}); 

console.log(blob);

const url = URL.createObjectURL(blob);
const image = document.createElement('img');
image.src = url;
image.addEventListener('load', ()=> {
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	const context = canvas.getContext('2d');
	context.drawImage(image, x,y,width,height);
	const link= document.getElementById("link1");
	console.log(link);
	link.href = canvas.toDataURL();
	URL.revokeObjectURL(url)
});

*/



//var blob = new Blob([svg1], {type: "image/svg+xml"});  
//saveAs(blob, "graph.svg");



/*

//1. convert from svg string
svg2img(svg1, function(error, buffer) {
    //returns a Buffer
    fs.writeFileSync('foo1.png', buffer);
});


//1. convert from svg string
svg2img(svg2, function(error, buffer) {
    //returns a Buffer
    fs.writeFileSync('foo2.png', buffer);
});


*/