document.getElementById("cookie").onclick = function() {
 
    let clickerClick = document.getElementById("clicker__counter");
    let cookieImage = document.getElementById("cookie").style.width;
    
    if (cookieImage === '200px') {
      clickerClick.textContent = parseInt(clickerClick.textContent) + 1;
      document.getElementById("cookie").style.width = '210px';
    } else {
      clickerClick.textContent = parseInt(clickerClick.textContent) + 1;
      document.getElementById("cookie").style.width = '200px';
     }
};