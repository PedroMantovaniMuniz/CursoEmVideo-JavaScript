let number = document.querySelector("input#formnumber");
let list = document.querySelector("select#formlist");
let res = document.querySelector("div#res");
let values = [];

function isNumber(number) {
    if (Number(number) >= 1 && Number(number) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(number, list) {
    if (list.indexOf(Number(number)) != -1) {
        return true;
    } else {
        return false;
    }
}

function add() {
    if (isNumber(number.value) && !inList(number.value, values)) {
        values.push(Number(number.value));
        let item = document.createElement("option");
        item.text = `Valor ${number.value} adicionado.`;
        list.appendChild(item);
        res.innerHTML = "";
    } else {
        window.alert("Valor inválido ou já encontrado na lista.");
    }
    number.value = "";
    number.focus();
}

function finish() {
    if (values.length == 0) {
        window.alert("Adicione valores antes de finalizar!");
    } else {
        let total = values.length;
        let max = values[0];
        let min = values[0];
        let sum = 0;
        for (let pos in values) {
            sum += values[pos];
            if (values[pos] > max) {
                max = values[pos];
            }
            if (values[pos] < min) {
                min = values[pos];
            }
        }
        let avg = sum / total;
        res.innerHTML = "";
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${max}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${min}.</p>`;
        res.innerHTML += `<p>A soma dos valores é ${sum}.</p>`;
        res.innerHTML += `<p>A média dos valores é ${avg}.</p>`;
    }
}