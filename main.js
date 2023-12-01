function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}

function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
     acc.push(element);
   }
 });
 return acc;
}

function reduce(array, f, acc) {
 if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
 }
 each(array, function (element, i) {
   acc = f(acc, element, i);
 });
 return acc;
}   
  
    $(document).ready(function cacher () {
      $(".content").hide();
      $("#stock").click(function() {
      
        $("#form1").show();
        $("#header1").hide();
      });
      $("#retour").click(function() {
         $(".content").hide();
        $("#form1").hide();
       $("#header1").show();
        
      });
    });
  
        
    function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}

var id = generateID();
var tableauDonnees = [];

function ajouterDonnee() {
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var price = document.getElementById('price').value;

  var objet = {
    id: id(),
    title: title,
    author: author,
    price: price,
  };

  tableauDonnees.push(objet);
  alert("Successful storage",objet['title']);

 
}
  
