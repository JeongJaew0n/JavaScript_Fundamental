let overloading = (function() {
    let funcs = {};
  
    return function (func) {
      funcs[func.name] = funcs[func.name] || {};
      funcs[func.name][func.length] = func;
    //this or window
      this[func.name] = (...params)=>(funcs[func.name][params.length].apply(this, params));
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
  // call 찾아보기.

  
  fff(1);
  
