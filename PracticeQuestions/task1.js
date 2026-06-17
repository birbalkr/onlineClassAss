const form = document.querySelector("form");
const name = document.querySelector(".Name");
const email = document.querySelector(".email");
const user = document.querySelector(".user");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let nameValue = name.value;
    let emailValue = email.value;

    if(nameValue.trim() ==="" || emailValue.trim() ==="") return ;
        
    user.innerHTML += `<div class="usercard">
                <div class="box1">
                    <img src="https://images.unsplash.com/photo-1781100037733-fbdfc1629114?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </div>
                <div class="data">
                    <h2>Name: ${nameValue}</h2>
                    <h2>Email: ${emailValue}</h2>
            </div>
            </div>`;

    form.reset();
})