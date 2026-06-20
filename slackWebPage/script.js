let dropdown = document.querySelector(".dropdown");
let dropdownItems = document.querySelector(".dropdownItem");
let dropdown1=document.querySelector(".dropdown1");
let dropdownItems1=document.querySelector(".dropdownItem1");



dropdown.addEventListener("click", () => {
    dropdownItems.classList.toggle("hidden");
    dropdownItems1.classList.add("hidden");
})

dropdown1.addEventListener("click",()=>{
    dropdownItems1.classList.toggle("hidden");
    dropdownItems.classList.add("hidden");
})

