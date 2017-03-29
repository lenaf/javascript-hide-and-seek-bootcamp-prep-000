function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var rankedList = document.querySelectorAll(".ranked-list li");
  for (var i = 0; i<rankedList.length ; i++){
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML, 10)+ n;
  }
}

function deepestChild(){
  var current = document.getElementById('grand-node');
  while(current.child){
    current = current.child;
  }
  return current
}
