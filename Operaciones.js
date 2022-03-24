function borrar(){
    document.getElementById('Menú').reset();
}

function sumar(){
    let K=parseFloat(document.getElementById('value 1').value);
    let F=parseFloat(document.getElementById('value 2').value);
    document.getElementById('result').innerHTML=K+F;
}
function restar(){
    let K=parseFloat(document.getElementById('value 1').value);
    let F=parseFloat(document.getElementById('value 2').value);
    document.getElementById('result').innerHTML=K-F;
}

function dividir(){
    let K=parseFloat(document.getElementById('value 1').value);
    let F=parseFloat(document.getElementById('value 2').value);
    document.getElementById('result').innerHTML=K/F;
}

function multiplicar(){
    let K=parseFloat(document.getElementById('value 1').value);
    let F=parseFloat(document.getElementById('value 2').value);
    document.getElementById('result').innerHTML=K*F;
}