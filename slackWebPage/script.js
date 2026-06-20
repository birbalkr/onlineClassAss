let dropdown = document.querySelector(".dropdown");
let dropdownItems = document.querySelector(".dropdownItem");
let dropdown1=document.querySelector(".dropdown1");
let dropdownItems1=document.querySelector(".dropdownItem1");
const video = document.getElementById("mainVideo");

document.querySelectorAll(".video-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const fileName = btn.dataset.video;

        video.src = `image/video/${fileName}`;
        video.load();
        video.play();
    });
});


dropdown.addEventListener("click", () => {
    dropdownItems.classList.toggle("hidden");
    dropdownItems1.classList.add("hidden");
})

dropdown1.addEventListener("click",()=>{
    dropdownItems1.classList.toggle("hidden");
    dropdownItems.classList.add("hidden");
})

