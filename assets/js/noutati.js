
const texts = document.querySelectorAll('.text-added');
const btns = document.querySelectorAll('.btn-2');
const dots = document.querySelectorAll('#dots');

for (let i = 0; i < btns.length; ++i) {
    btns[i].addEventListener("click", function() {
    
    if (dots[i].style.display === "none") {
            btns[i].innerHTML = "Cititi mai mult";
            dots[i].style.display = "inline";
            texts[i].style.display = "none";
        } else {
            btns[i].innerHTML = "Cititi mai putin";
            dots[i].style.display = "none";
            texts[i].style.display = "inline";
        }
});
}
