var x = 9;
function ex() {
    var x = 1;

    if(true) {
        var x  = 10;
    }

    console.log("inner:", x);
}

ex();

console.log("end:", x);