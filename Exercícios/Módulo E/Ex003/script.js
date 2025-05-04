function count() {
    let start = document.getElementById('txtstart').value;
    let end = document.getElementById('txtend').value;
    let step = document.getElementById('txtstep').value;
    let res = document.getElementById('res');

    if (start === '' || end === '' || step === '') {
        alert('Preencha todos os campos!');
        return;
    }

    start = Number(start);
    end = Number(end);
    step = Number(step);

    if (step == 0) {
        alert('Passo inválido! Considerando passo 1');
        step = 1;
    }

    res.innerHTML = 'Contando: <br>';

    if (start < end) {
        for (let i = start; i <= end; i += step) {
            res.innerHTML += `${i} \u{1F449}`;
        }
    } else {
        for (let i = start; i >= end; i -= step) {
            res.innerHTML += `${i} \u{1F449}`;
        }
    }
    
    res.innerHTML += '\u{1F3C1}';
}