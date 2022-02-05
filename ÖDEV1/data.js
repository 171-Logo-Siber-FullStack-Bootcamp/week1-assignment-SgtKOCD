function odev1 () {
    console.log(this.responseText);
  }
  
  var nesneCek = new XMLHttpRequest();
  var url="https://jsonplaceholder.typicode.com/users"
  nesneCek.addEventListener("load", odev1);
  nesneCek.open("GET", url);
  nesneCek.send();