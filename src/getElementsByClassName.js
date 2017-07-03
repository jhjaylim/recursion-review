// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
/*var getElementsByClassName = function(className) {
  // your code here
  //base case 
    //no child nodes 
  //recursive case
    //nodes with child node
  var results = [];
  var rootNode = document.body;
  
  var checkChildNode = function(node) {
    //get childnode of node if any
    var childNodes = node.children;
    //get class list of node
    var classList = node.classList;
    //1. check if node has target class from class list
      //if it does, push to result to results array
    if (classList.contains(className)) {
      

      results.push(node);
    }
    if (childNodes.length > 0) {
      for (var i = 0; i < childNodes.length; i++) {
        checkChildNode(childNodes[i]);
      }
    } else {
      return;
    }
    
  };
  checkChildNode(rootNode);


  return results;

};*/

var getElementsByClassName = function (className, node) {
    
  var results = [];
      
  if (node === undefined) {
    node = document.body;
  }

  // find class list
  if (node.classList.contains(className)) {
    results.push(node);
  }
 
  //if there is child node then iterate over loop
  if (node.firstChild) { // find childnode and inside the find classlist
    for (var i = 0; i < node.children.length; i++) {
      results = results.concat(getElementsByClassName(className, node.children[i]));
    } 
      
  }
 
  return results;
    
};

