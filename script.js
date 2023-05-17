

function trocaCor(cor) {
    let color = document.querySelector(".circulo")
    color.style.background = cor
}

function trocaImg(imgs) {
    let img = document.querySelector(".img-iphone")
    img.src = imgs

}

const meta = document.querySelector("#meta")
const caret = document.querySelector(".caret")
const opition = document.querySelector("ul")


meta.addEventListener("click", () => {

    caret.classList.toggle("caret-rotate")

    opition.classList.toggle("menu-open")




})


opition.forEach(opitions =>{
   opitions.addEventListener("click", () =>{

    caret.classList.remove("caret-rotate")
        
        opition.classList.remove("menu-open")
   })

        

} )


