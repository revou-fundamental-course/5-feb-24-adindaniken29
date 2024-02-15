function reset(){
    document.getElementById('input-field').value='';
    document.getElementById('outputfield').value='';
    document.getElementById('output-kalkulasi').value='';

}

function convert(){
    var inputC = parseFloat(document.getElementById('input-field').value)
    if(isNaN(inputC)){
        alert("angka belum di isi atau nilai tidak berbentuk angka");
        document.getElementById('input-field').value='';
        return;
    }
    var hasil= parseFloat((inputC * 9/5) +32);
    document.getElementById('output-field').value = hasil;
    document.getElementById('output-field').value = "("+ input-field +" × 9/5)+32 = " + hasil+"℉";
}

function reverse(){
    var inputF = parseFloat(document.getElementById('output-field').value);
    if(isNaN(inputF)){
        alert("angka belum di isi atau nilai tidak berbentuk angka");
        document.getElementById('output-field').value='';
        return;
    }
    var hasil= parseFloat((inputF - 32) * 5/9);
    document.getElementById('input-field').value = hasil;
    document.getElementById('output-kalkulasi').value = "(" + output-field + " - 32) × 5/9 = " + hasil+"℃";
}