function verify() {
    let data = new Date();
    let year = data.getFullYear();
    let formYear = document.getElementById("txtyear");
    let res = document.querySelector("div#res");
    if (formYear.value.length == 0 || Number(formYear.value) > year) {
        window.alert("Verifique os dados e tente novamente!");
    } else {
        let formSex = document.getElementsByName("radsex");
        let age = year - Number(formYear.value);
        let gender = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'photo');
        if (formSex[0].checked) {
            gender = 'Homem';
            if (age >= 0 && age <= 10) {
                // Criança
                img.setAttribute('src', 'images/boy.png');
            } else if (age < 21) {
                // Jovem
                img.setAttribute('src', 'images/young-boy.png');
            } else if (age < 50) {
                // Adulto
                img.setAttribute('src', 'images/adult-boy.png');
            } else {
                // Idoso
                img.setAttribute('src', 'images/elder-boy.png'); 
            }
        } else if (formSex[1].checked) {
            gender = 'Mulher';
            if (age >= 0 && age <= 10) {
                // Criança
                img.setAttribute('src', 'images/girl.png');
            } else if (age < 21) {
                // Jovem
                img.setAttribute('src', 'images/young-girl.png');
            } else if (age < 50) {
                // Adulto
                img.setAttribute('src', 'images/adult-girl.png'); 
            } else {
                // Idoso
                img.setAttribute('src', 'images/elder-girl.png'); 
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Você é ${gender} e tem ${age} anos.`;
        res.appendChild(img);
    }
}