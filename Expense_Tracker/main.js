const myForm = document.querySelector("#my-form");
const expense_amount = document.querySelector("#amount");
const expense_description = document.querySelector("#descrip");
const expense_category = document.querySelector("#category");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if (expense_amount.value === "" || expense_description.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `${expense_amount.value} -
          ${expense_description.value} -
          ${expense_category.value}`
      )
    );
    userList.appendChild(li)
    var delete_expense = document.createElement('button')
    delete_expense.className='btn btn-sm float-right delete'
    delete_expense.appendChild(document.createTextNode('Delete Expense'))
    delete_expense.onclick=()=>{
        localStorage.removeItem(myObj.expenseAmount)
        userList.removeChild(li)
    }
    li.appendChild(delete_expense)
    var edit_expense = document.createElement('button')
    edit_expense.className='btn btn-sm float-right delete'
    edit_expense.appendChild(document.createTextNode('Edit Expense'))
    edit_expense.onclick=()=>{
        localStorage.removeItem(myObj.expenseAmount)
        userList.removeChild(li)
        expense_amount.value = myObj.expenseAmount
        expense_description.value = myObj.expenseDescription
        expense_category.value = myObj.expenseCategory
    }
    li.appendChild(edit_expense)
    const myObj={
        expenseAmount : expense_amount.value,
        expenseDescription : expense_description.value,
        expenseCategory : expense_category.value
    }
    localStorage.setItem(JSON.parse(JSON.stringify(myObj.expenseAmount)), JSON.stringify(myObj))
    expense_amount.value = ''
    expense_description.value = ''
    expense_category.value=''
  }
}
