const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)
function onSubmit(e){
    e.preventDefault()

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() => msg.remove(), 3000)
    }else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} `))
        userList.appendChild(li)
        const myObj = {
            username : nameInput.value,
            email : emailInput.value
        }
        localStorage.setItem(JSON.stringify(myObj.email), JSON.stringify(myObj))
        const o = localStorage.getItem('userDetails')
        console.log(o);
        //CLear fields
        nameInput.value = ''
        emailInput.value = ''
    }
    
}