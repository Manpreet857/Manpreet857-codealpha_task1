const listbox = document.getElementById('listbox')
const addbt = document.getElementById('add')
const deletebt = document.getElementById('delete')
const input = document.querySelector(".input")
// let value = entertask.innerHTML;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((task) => { createlist(task) })


addbt.addEventListener('click', () => {
    let taskvalue = input.value;
    console.log(input.value)
    if (input.value == '') {
        alert("Please Enter something in input box")
    }
    else {
        let check = tasks.some((task)=>{
return task === taskvalue;
        })
        
if(!check){
        createlist(taskvalue);
        tasks.push(taskvalue)
        localStorage.setItem('tasks', JSON.stringify(tasks))
}
else alert("task already added")
    }
})

function createlist(newvalue) {
    const div = document.createElement('div')
    div.setAttribute("class", "list");
    div.innerHTML = `
  <span>
  <li>${newvalue}</li>
  </span>
  <i class="fa-solid fa-check"  id="check"></i>
  <i class="fa-solid fa-pencil" id="edit"></i>
  <i class="fa-solid fa-trash-can-arrow-up" id="delete"></i>
`

    listbox.appendChild(div)
    div.querySelector("#delete").addEventListener('click', () => {
        div.remove();
        tasks = tasks.filter((task) => { return task !== newvalue })
        localStorage.setItem("tasks", JSON.stringify(tasks));

    })

    div.querySelector("#check").addEventListener('click', () => {
        div.querySelector("span li").style.textDecoration = "line-through"
        div.querySelector("span li").style.color= "green"
        tasks = tasks.filter((task) => {
            return task !== newvalue;
        })
        localStorage.setItem("tasks", JSON.stringify(tasks));
    })
    div.querySelector("#edit").addEventListener('click',()=>{
        input.value=newvalue
        div.querySelector("span li").style.color="yellow"
       
       addbt.addEventListener('click',()=>{ tasks = tasks.filter((task) => {
           return task !== newvalue;
           
        })
           localStorage.setItem("tasks", JSON.stringify(tasks));
           
        })
    })
}



