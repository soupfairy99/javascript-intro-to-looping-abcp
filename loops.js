function forLoop(array)

  { var makeArray = [];
  for (var i = 0; i < 25; i++)
  {
 if  (i === 1)  
    { makeArray.push("I am 1 strange loop.")}
    else
    {makeArray.push(`I am ${i} strange loops.`)}
    
  }
  return makeArray;
}

forLoop();

function whileLoop(n) {
  
  let countdown = n;
  while (countdown > 0) {console.log(--countdown)
}
return('done')
}

function doWhileLoop (array) {array.length > 0 && maybeTrue()function maybeTrue() {
  return Math.random() >= 0.5
}}