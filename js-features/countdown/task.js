const output = document.getElementById("timer");

const countTime = function() {
        
    if (output.textContent >= 1){
      output.textContent --;
    } else if(output.textContent = '0') {
      alert("Время кончилось!");
    }
}
    
setInterval(countTime,1000);
