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

