// let overloading = (function(){
//     let funcs = {};
//     // 어떤 param이 들어 왔는지에 따라 다른 동작.

//     return function (funcs) {
//         funcs[funcs.name] = funcs[funcs.name] || [];
//         funcs[funcs.name][funcs.length] = funcs;
        
//         return function() {
//             // funcs[funcs.name].forEach(f => {
//             //     if(f.length === arguments.length) {
//             //         return f.apply(this, arguments);
//             //     }
//             // });
//             return funcs[funcs.name][funcs.length];
//         }
//     }
// });

// overloading(1,2,3);