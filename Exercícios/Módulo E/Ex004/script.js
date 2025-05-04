function multiplicationTable() {    
    let number = document.getElementById('txtnumber').value;
    let table = document.getElementById('selMultiplicationTable');
    table.innerHTML = '';

    if (number === '') {
        alert('Por favor, digite um número!');
        return;
    }

    number = Number(number);

    for (let i = 1; i <= 10; i++) {
        let item = document.createElement('option');
        item.value = `table${i}`;
        item.text = `${number} x ${i} = ${number * i}`;
        table.appendChild(item);
    }
}