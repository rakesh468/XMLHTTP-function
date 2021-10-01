//  calculate Celsius to Fahrenheit conversion//
var celsius=12;
var fahrenheit=(celsius*1.8)+32;
console.log(fahrenheit.toFixed(2));

// calculate Square of a number//
let number=4;
console.log(Math.pow(number,2))

// Addition of 3 numbers//
let a=54;
let b=44;
let c=56;
console.log(a+b+c);
// conversion of meter to miles//
let meter=60;
let miles=(meter/0.000621)
console.log(miles.toFixed(2));

//  conversion of pounds to kilo//
let pounds=10;
let kilogram=(pounds/2.205)
console.log(kilogram.toFixed(2)); 

// Calculate five test scores and print their average//
const marks=[50,60,78,90]
const test=value=>(value)>=65;
const result=marks.filter(test);
console.log(result);

//calclate area of equivalateral triangle//
let num=30;
let area=(1/4)*(Math.sqrt(3)*num*num);
console.log(area.toFixed(2));

// calculate volume of sphere//
let  radius=5;
let volume=(3/4)*Math.PI * Math.pow(radius,3);
console.log(volume.toFixed(2));

//calculate  area of triangle//
let base=15;
let height=20;
let triangle=(1/2)*base*height;
console.log(triangle.toFixed(2));

// calculate area,circumference of cricle//
let radiuss=20;
let circle=(Math.PI * Math.pow(radiuss,2));
let circumference=2*(Math.PI*radiuss);
let diameter=(2*radiuss);
console.log(circle.toFixed(2));
console.log(circumference.toFixed(2));
console.log(diameter);

// calculate volume of prism//
let basearea=20;
let length=40;
let prism=(basearea*length);
console.log(prism);



