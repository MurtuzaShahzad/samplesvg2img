var svgElement = document.getElementById("divsvg1").children[0];

var svgString = new XMLSerializer().serializeToString(svgElement);

console.log(svgString);

let URL = window.URL || window.webkitURL || window;


const blob1 = new Blob([svgString],{type:'image/svg+xml;charset=utf-8'});
const img1 = new Image();

img1.src = URL.createObjectURL(blob1);

//document.body.append(img1);


var link = document.createElement('a');
link.href = img1.src;
//link.download = 'Download.png';
document.body.appendChild(link);
link.click();
//document.body.removeChild(link);

