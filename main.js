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
