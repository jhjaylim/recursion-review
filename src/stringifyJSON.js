// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var objType = typeof obj;
  //ID obj
  if (objType === 'undefined' || objType === 'function') {
    return null;
  }
  //undefined or function
    //return null
  if (objType === 'boolean' || objType === 'number') {
    return obj.toString();
  } else if ( obj === null ) {
    return 'null';
  } else if (objType === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    
    var stringifiedArray = obj.map(function(ob) {
      return stringifyJSON(ob);
    });
    return '[' + stringifiedArray.join(',') + ']';
  
  } else if (objType === 'object') {
    if (Object.keys(obj).length < 1) {
      return '{}';
    }  
    var temporaryArray = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'undefied' && typeof obj[key] !== 'function' && key !== 'undefined') {
        temporaryArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    
      }
    }
    return '{' + temporaryArray.join(',') + '}';
  
  }

  //boolean
    //return convert boolean to string
  //number
    //return convert num to string
  //string
    //return "string"
  //null
    //return convert null to string

  //array
    //map each array value into new array with stringifyJSON
    //join() result array
    //add square brackets around joined string
    //return string above
  //object
    //iterate through obj
    //store key value pair as an element arr;
    //push arr into larger arr
    //map small arrs into string using join()
    //join entire obj arr with join(':');
    //add curly braces
    //return string
    
};
