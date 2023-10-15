
tabuada = () => {
let n = parseInt(document.getElementById('num').value);
let result = document.getElementById('res');
let tabu = '';

for (var m = 1; m <= 10; m++) {
    tabu += `<p>${n} x ${m} = ${n*m}</p>`;
    }
    
    result.innerHTML = tabu;
};

