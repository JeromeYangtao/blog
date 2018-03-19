function callback (data) {
  alert(data.message)
}

//添加<script>标签的方法
function addScriptTag (src) {
  let script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.src = src
  document.body.appendChild(script)
}

window.onload = function () {
  addScriptTag('http://localhost:20002/test.js')
  //test.js的内容为
  //callback({message:"success"});
}