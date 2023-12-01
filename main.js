
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
  
const booksData = [
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publicationYear: 1951
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publicationYear: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian Fiction",
      publicationYear: 1949
    },
  ];

  function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }

function finds(){
    var x = $("#tit").val()
    return filter(booksData,function(e,i){
        if(e.title === x){
        alert("the Title : " +e.title)
        }

    })
}
  

var d= new Date() 
var year=d.getFullYear()
var month=d.getMonth()
if(month<10){
    month='0'+month
}
var date=d.getDate()
if(date<10){
    date='0'+date
}
var c_date=year+"-"+month+"-"+date
document.getElementById('deliveryDate').value= c_date

function borrowser(){
    var y = $("#title").val()
    var x=0
    for(var i=0;i<booksData.length;i++){
        if(booksData[i].title===y){
            alert("borrowser book is successful") 
            break;  
        }
        else  x+=1
    }
 if(x=== booksData.length ){
    alert("this book is not found in our library")
 }
}
// our work
