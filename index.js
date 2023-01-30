function setResult(value) {
    document.getElementById('result').innerHTML = value;
}

function getResult() {
    return(document.getElementById('result').innerHTML);
}

function add(key) { 
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}

function calc() {
    var result = eval(getResult()); 
    setResult(result);
}

function del() { 
    setResult(0);
}

function raizC() {
    var result = Math.sqrt(getResult());
    setResult(result);
}

function pow() {
    var input = prompt("Ingrese la base y el exponente separados por un espacio (ejemplo: 2 3)");
    var base = input.split(" ")[0];
    var exponent = input.split(" ")[1];
    var result = Math.pow(base, exponent);
    setResult(result);
}
