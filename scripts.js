function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("main").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "front-page.html", true);
  xhttp.send();
}

loadDoc();