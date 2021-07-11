
btn.addEventListener("click", function() { 
    let bill = document.getElementById('bill').value;
    let rate = document.getElementById('rate').value; 
    let numPp = document.getElementById('numPeople').value;
    let res = (bill*rate)/numPp; 
    res = res.toFixed(2); 
    document.getElementById('tip').innerHTML ="Each one should tip "+ res + "$"; 
    document.getElementById('cctip').style.display = "block"; 
})