let buybtn = document.querySelectorAll(".buy");
buybtn.forEach(element => {
    element.addEventListener("click", ()=>{
        window.location.href = "/payment.html";
    });
});
let prof = document.querySelector(".profile");
const email = localStorage.getItem('email');
const username = localStorage.getItem('name');
console.log(email); 
console.log(name); 
let profshow = document.querySelector(".prof-show");

prof.addEventListener("click", ()=>{
    if (profshow.style.display === 'none') {
        profshow.style.display = 'flex';
      } else {
        profshow.style.display = 'none';
      }
    profshow.innerText = username;
    const br1 = document.createElement('br');
    profshow.appendChild(br1);
    profshow.innerText += email;
});


