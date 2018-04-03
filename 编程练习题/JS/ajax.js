// get
let xmlhttp1 = new XMLHttpRequest()
xmlhttp1.open('GET', 'demo_get.php?id=1&name=lemoo&t=' + Math.random(), true)
xmlhttp1.send()

// post
let xmlhttp = new XMLHttpRequest()
xmlhttp.open('POST', 'ajax_test.php', true)
xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
xmlhttp.send('fname=Bill&lname=Gates')
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    document.getElementById('myDiv').innerHTML = xmlhttp.responseText
  }
}
