const btn = document.querySelector(".btn")
const myForm = document.querySelector("#myform")
const nameInput = document.querySelector("#name")
btn.addEventListener("mouseout", (e)=>{
    e.preventDefault()
    document.querySelector("#myform").getElementsByClassName.background="#ccc"
})

btn.addEventListener("mouseover",(e)=>{
    e.preventDefault()
    document.querySelector("#myform").styke.color="#ccc"
})
myForm.addEventListener("submit", onSubmit)

function onSubmit(e){
    e.preventDefault()
    console.log(nameInput.value)
}