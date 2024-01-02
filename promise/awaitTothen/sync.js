function A(p) {
  return new Promise((resolve, reject) => {
    console.log(`${p}-A`);
    setTimeout(() => {
      console.log(`${p}-A-resolve`);
      resolve("A");
    }, 1000);
  });
}
function E() {
  console.log("E");
}
function B(p) {
  return new Promise((resolve, reject) => {
    console.log(`${p}-B`);
    setTimeout(() => {
      console.log(`${p}-B-resolve`);
      resolve("HA");
    }, 1500);
  });
}
function C(p) {
  return new Promise((resolve, reject) => {
    console.log(`${p}-C`);
    setTimeout(() => {
      console.log(`${p}-C-resolve`);
      resolve("C");
    }, 1000);
  });
}
function D(p) {
  return new Promise((resolve, reject) => {
    console.log(`${p}-D`);
    setTimeout(() => {
      console.log(`${p}-D-resolve`);
      resolve("D");
    }, 2500);
  });
}
function a1() {
  console.log("a1");
}
function b1() {
  console.log("b1");
}

async function c1() {
  let a = await A("c1");
  let b = E();
  let c = await B("c1");
  let d = c + 1;
}

// async function d1() {
//   let a = await C("d1");
//   let b = E();
//   let c = await D("d1");
//   let d = c + 1;
// }

//   a1();
c1();
//   b1();
// d1();

function then_c1(value) {
  let promise = A(value);
  return promise.then((result)=>{
    let a = result;
    let b = E();
    B(value).then((result)=>{
      let c = result;
      let d = c+1;
    })
  });
  // return promise;
}

// let yy = then_c1('then_c1');