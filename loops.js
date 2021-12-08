//jshint esversion:6

let a = ["check", "this", "out"];

for (let ay of a){
    console.log("The number is: "+ ay);
}

/**
while (ay <= 7){
    console.log(ay);
    ay++;
}
**/

a.forEach (ay => {
    console.log(ay);
});