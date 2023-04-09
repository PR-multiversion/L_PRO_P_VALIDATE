const container= document.querySelector(".container"),
pwshowhide= document.querySelectorAll(".showpw"),
pwFields = document.querySelectorAll(".password"),
signup = document.querySelector(".signup-text"),
login = document.querySelector(".login-text");

pwshowhide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{ 
        pwFields.forEach(pwField => {
            if(pwField.type ==="password")
            {
                pwField.type="text";
                pwshowhide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            }
            else
            {
                pwField.type="password";
                pwshowhide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

signup.addEventListener("click", ()=>{
    container.classList.add("active");
});
login.addEventListener("click", ()=>{
    container.classList.remove("active");
});


//firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqgShEQ6eDbGg5OVUyxLeU4Hd-wByZslM",
    authDomain: "em-pw-auth.firebaseapp.com",
    projectId: "em-pw-auth",
    storageBucket: "em-pw-auth.appspot.com",
    messagingSenderId: "693933474337",
    appId: "1:693933474337:web:75e8d81362728feca89960"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const signupbtn = document.getElementById('signup');
const loginbtn = document.getElementById('login');
const signname = document.getElementById('s-name');
const signemail = document.getElementById('s-email');
const signpw = document.getElementById('s-pw');
const signcpw = document.getElementById('s-cpw');

//Signup event
signupbtn.onclick = () =>{
    var name = signname.value;
    var email = signemail.value;
    var password = signpw.value;
    var cpw = signcpw.value;
    if(name ==="")
    {
        alert("Enter username");
    }
    else{
        if (password !== cpw) {
            alert('Passwords do not match');
            return;
        }
        createUserWithEmailAndPassword(auth,email,password,name).then((userCredential)=>{
                const user = userCredential.user;
                const uemail = user.email;
                const uname = name;
                localStorage.setItem('email', uemail);
                localStorage.setItem('name', uname);
                set(ref(db, 'users/' + name), {
                    username: name,
                    email: email
                  }).then(() => {
                    // Data saved successfully!
                    alert("Acccount created");
                    window.location.replace("/home.html");
                  })
                  .catch((error) => {
                    // The write failed...
                    alert(error);
                  });
            }).catch((err)=>{
                alert(err.message);
            });
        };
    }
    

//Login event
loginbtn.onclick = () =>{
    var email = document.getElementById('loginemail').value;
    var password = document.getElementById('loginpw').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Login successful");
        window.location.replace("/home.html");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Incorrect mailid or password");
    });
    };

