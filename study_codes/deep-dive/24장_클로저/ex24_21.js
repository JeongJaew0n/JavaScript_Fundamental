var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = (function (n) {
    return function() {
        return n;
    };
  })(i);
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}
