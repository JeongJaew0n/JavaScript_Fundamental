let overloading = (function() {
    let funcs = {};
  
    return function (func) {
      funcs[func.name] = funcs[func.name] || [];
      funcs[func.name].push(func);
  
      window[func.name] = function() {
        for(let f of funcs[func.name]) {
          if(f.length===arguments.length) {
            return f.apply(this, arguments);
          }
        }
      };
    }
  })();
  
  overloading(function fff(a) {
    console.log('1', a);
    return 'f1';
  });
  
  overloading(function fff(a,b) {
    console.log('2', a,b);
    return 'f2';
  });
  
  overloading(function fff(a,b,c) {
    console.log('3', a,b,c);
    return 'f3';
  });
  
  fff(1);