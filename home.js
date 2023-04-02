let buybtn = document.querySelectorAll(".buy");
buybtn.forEach(element => {
    element.addEventListener("click", ()=>{
        window.location.href = "/payment.html";
    });
});
