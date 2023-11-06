let total = 0;
let rem = 50

document.getElementById('textarea').addEventListener('keyup', () => {
    total = document.getElementById('textarea').value.length
    rem = 50 - total;

    document.getElementById("total-counter").innerText = total;
    document.getElementById("remaining-counter").innerText = rem;

})

document.getElementById("reset").onclick = () => {
    document.getElementById('textarea').value = '';
    total = document.getElementById('textarea').value.length
    rem = 50 - total;

    document.getElementById("total-counter").innerText = total;
    document.getElementById("remaining-counter").innerText = rem;
}
