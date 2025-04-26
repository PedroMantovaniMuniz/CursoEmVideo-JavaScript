function load() {
    let msg = window.document.getElementById("msg");
    let img = window.document.getElementById("image");
    let data = new Date();
    let hour = data.getHours();
    msg.innerHTML = `Agora são ${hour} horas.`;
    if (hour >= 0 && hour < 12) {
        img.src = "images/morning.png";
        document.body.style.background = "#857462";
    } else if (hour >= 12 && hour < 18) {
        img.src = "images/afternoon.png";
        document.body.style.background = "#fc7501";
    } else {
        img.src = "images/night.png";
        document.body.style.background = "#1a335c";
    }
}
