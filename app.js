let marquee = document.getElementById("marquee")
let div = document.getElementById("div")
let btn = document.getElementById("btn")
let inp =  document.getElementById("inp-text")
let h1 = document.getElementById("h1")
marquee.addEventListener("click", ()=>{
    marquee.classList.add("off")
    div.classList.add("text-on")
})
btn.addEventListener("click", ()=>{
    marquee.classList.remove("off")
    div.classList.remove("text-on")
    h1.innerText = inp.value
})
