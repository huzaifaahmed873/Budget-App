////get <ul>
var listBox = document.getElementById("listBox")
var userName = document.getElementById("userName");
debugger
var userBudgert = document.getElementById("userBudgert");
var expenseamount = document.getElementById("expenseam");
var balanceamount = document.getElementById("balanceamount");
let notes = localStorage.getItem("User");
let budget = localStorage.getItem("Budget");
let expenseam = localStorage.getItem("expenseam");
if (notes && budget) {
    userName.innerHTML = notes
    userBudgert.innerHTML = budget
    if (expenseam) {
        expenseamount.innerHTML = expenseam
        balanceamount.innerHTML = Number(budget) - Number(expenseam)

    }
    else {
        expenseamount.innerHTML = 0
        balanceamount.innerHTML = Number(budget)
    }
    debugger
}
function addTodo() {
    debugger
    var input = document.getElementById("input")
    var input1 = document.getElementById("input1")
    // console.log(input.value)

    if (input.value && input1.value && input1.value > 0) {
        if (Number(input1.value) <= Number(balanceamount.innerHTML)) {
            ///create element and li text//
            expenseamount.innerHTML = Number(expenseamount.innerHTML) + Number(input1.value)
            localStorage.setItem("expenseam", expenseamount.innerHTML);
            balanceamount.innerHTML = Number(userBudgert.innerHTML) - Number(expenseamount.innerHTML ) 
            var mydiv = document.createElement("div")
            var li = document.createElement("li")
            var li1 = document.createElement("li")
            var liTxt = document.createTextNode(input.value)
            var liTxt1 = document.createTextNode(input1.value)
            // li.innerHTML = input.value

            mydiv.setAttribute("data-aos", "fade-right")
            mydiv.setAttribute("data-aos-duration", "2000")
            // mydiv.attributes += "data-aos-duration='3000'"
            li.appendChild(liTxt)
            li1.appendChild(liTxt1)
            var editBtn = document.createElement("button")
            var editBtnTxt = document.createTextNode("EDIT")
            editBtn.setAttribute("onclick", "editList(this)")
            editBtn.appendChild(editBtnTxt)
            mydiv.appendChild(editBtn)
            var delBtn = document.createElement("button")
            var delBtnTxt = document.createTextNode("DELET")
            delBtn.setAttribute("onclick", "delList(this)")

            delBtn.appendChild(delBtnTxt)
            // console.log(delBtn)
            mydiv.appendChild(delBtn)
            // li1.appendChild(delBtn)

            //li append in ul
            mydiv.appendChild(li)
            mydiv.appendChild(li1)
            listBox.appendChild(mydiv)
            input.value = ""
            input1.value = ""
        }
        else{
            alert("Expense Amount can not be greater than Balance Amount")
        }



    } else {
        alert("enter correct value")
    }




}

function delAll() {
    listBox.innerHTML = ""
    expenseamount.innerHTML = 0
    localStorage.setItem("expenseam", expenseamount.innerHTML);
    balanceamount.innerHTML = Number(userBudgert.innerHTML)
}

function editList(e) {
    // console.log(e.parentNode.firstChild.nextSibling.nextSibling.innerHTML)
    var litxt = e.parentNode.firstChild.nextSibling.nextSibling.innerHTML
    // console.log(litxt.innerHTML)
    var litxt1 = e.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML
    // console.log(litxt.nodeValue);
    var editLiTxt = prompt("EDIT title", litxt)
    var editLiTxt1 = prompt("EDIT Amount", litxt1)
    // console.log(editLiTxt)
    e.parentNode.firstChild.nextSibling.nextSibling.innerHTML = editLiTxt
    e.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML = editLiTxt1
}
function delList(e) {
    // console.log(e.parentNode)
    e.parentNode.remove()

}





// function editSingleNote(e) {
//     // console.log(e.parentNode.parentNode.firstChild.nextSibling);
//     var value = e.parentNode.parentNode.firstChild.innerHTML;
//     var editNoteTile = prompt('Edit Title: ', value);

//     e.parentNode.parentNode.firstChild.innerHTML = editNoteTile;

//     var valueDesc = e.parentNode.parentNode.firstChild.nextSibling.innerHTML;
//     var editNoteDesc = prompt('Edit Description: ', valueDesc);
//     e.parentNode.parentNode.firstChild.nextSibling.innerHTML = editNoteDesc;
// }





// function passshow(){
//     var passwordfield = document.getElementById("passwordfield")
//     var showpassword = passwordfield.firstElementChild.innerHTML

// }


//password show or hide code//////
function fieldcheck(e) {
    debugger
    var passInput = document.getElementById("passInput");
    var usernamedata = document.getElementById("usernamedata");
    if (passInput.value != undefined && passInput.value != "" && usernamedata.value != undefined && usernamedata.value != "") {
        localStorage.setItem("User", usernamedata.value);
        localStorage.setItem("Budget", passInput.value);
        e.href = "./notebook.html"

    }
    else {
        alert("Enter Complete Data First.")
    }

}

















