function add(a,b){
    return a+b;
}

function divideByTwo(value){
    return value/2;

}
function multiply(v,h){
    return v*h;
}


function area(a,b){
    const x=add(a,b);
    return divideByTwo(x);
}
function trapezoid(a,b,h){
    const y=area(a,b);
    return multiply(y,h);
}

console.log(trapezoid(2,4,4));