const asyncAdd = async (a,b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return Promise.reject('Argumenty muszą mieć typ number!')
  }
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(a+b)
    }, 100)
  })
}

let args100 =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,];
let args5 = [1,2,3,4,5];
let numberOfAsyncAdd = 0;;
var startTimer;
var currentTime;
var elapsedTime = 0;


const asyncAddMultiple = async (args) => {
  let sum = 0;
  startStopwatch();
  for (const arg of args) {
    sum = await asyncAdd(sum, arg);
    numberOfAsyncAdd++;
  }
  stopStopwatch();
  console.log(`ilość operacji asynchronicznych:${numberOfAsyncAdd}`)
  console.log(sum);
  return sum;
}

function startStopwatch(){
  startTimer = performance.now();
  console.log('timer start');
}

function stopStopwatch(){
  currentTime = performance.now();
  elapsedTime = (currentTime - startTimer);
  console.log(`timer stop: ${elapsedTime}`);
}

//asyncAddMultiple(args5);

const asyncOptimizeAddMultiple = async (args) => {
  startStopwatch();
  const promises = args.map(arg => asyncAdd(0, arg));
  const results = await Promise.all(promises);
  const result = results.reduce((sum, result) => sum + result, 0);
  stopStopwatch();
  console.log(result);
  return result;
}

asyncOptimizeAddMultiple(args100);