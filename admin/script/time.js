
setInterval(function () {
    document.getElementById("time").innerText =
        new Date().toLocaleTimeString();
}, 1000);
