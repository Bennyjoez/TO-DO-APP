//delete a task
const list = document.querySelector('.task-container ul'); 
list.addEventListener('click', function(e){
    if(e.target.className == 'delete-button'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})


//add tasks to the list
const addForm = document.forms['task-entry'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement('li');
    const thumbtack = document.createElement('i');
    const taskName = document.createElement('span');
    const deleteButton = document.createElement('button');
    const editIcon = document.createElement('i');

    //add classes 
    taskName.classList.add('name');
    deleteButton.classList.add('delete-button');
    editIcon.classList.add('fa-solid', 'fa-pen-to-square', 'color');
    thumbtack.classList.add('fa-solid', 'fa-thumbtack');
    
    // thumbtack.classList.add('fa-solid fa-thumbtack')
    // taskName.classList.add('name');
    // deleteButton.classList.add('delete-button');
    // editIcon.classList.add("fa-solid fa-pen-to-square color")

    //append the created elements to the document
    li.appendChild(thumbtack);
    li.appendChild(taskName)
    li.appendChild(deleteButton);
    li.appendChild(editIcon);
    list.appendChild(li);

    //add content passed and the defaults
    deleteButton.textContent = "Delete"
    taskName.textContent = value

})

//setting the hide button 
    //creating a reference to the checkbox
    const hideTasks = document.querySelector('#hide'); 
    hideTasks.addEventListener('change', function(e) {
        if (hideTasks.checked) {
            list.style.display = "none";
        }
        else {
            list.style.display = "initial"
        }
    });

const searchBar = document.forms['search-bar'].querySelector('input');

searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    const tasks = list.getElementsByTagName('li');
    Array.from(tasks).forEach(function(task){
        const description = task.querySelector('span').textContent;
        if(description.toLowerCase().indexOf(term) != -1){
            task.style.display = 'block'
        }
        else {
            task.style.display = 'none';
        }
    })
});




// //wordings added as tasks
// let taskNames = document.getElementsByClassName('name')
// //convert the taskNames into an array
// let taskNamesArr = Array.from(taskNames)
// // add a task number to each task
// for (let i =0; i < taskNamesArr.length; i++) {
//     taskNamesArr[i].textContent += ` (Task ${i + 1})`
// }


