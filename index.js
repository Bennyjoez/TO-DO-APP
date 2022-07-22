//delete a task
const list = document.querySelector('.task-container ul'); 
list.addEventListener('click', function(e){
    if(e.target.textContent == 'Delete'){
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
    const editIcon = document.createElement('button');
    // const trashCan = document.createElement('i');

    //add classes and IDs
    taskName.classList.add('name');
    deleteButton.classList.add('delete-button', 'color');
    editIcon.classList.add('color', 'hover');
    thumbtack.classList.add('fa-solid', 'fa-thumbtack');
    // trashCan.classList.add('fa-solid', 'fa-trash-can');

    //append the created elements to the document
    li.appendChild(thumbtack);
    li.appendChild(taskName);
    li.appendChild(deleteButton);
    li.appendChild(editIcon);
    list.appendChild(li);

    //add content passed and the defaults
    deleteButton.textContent = "Delete";
    editIcon.textContent = "Edit";
    taskName.textContent = value;

    //styling some elements 
    editIcon.style.marginLeft = '5px';
    deleteButton.style.marginLeft = '5px';


});

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


//setting the editIcon

function save(el) {
    let textToEdit = el.parentNode.children[1].value;
    let spanSave = document.createElement('span');
    spanSave.textContent = textToEdit;
    el.parentNode.children[1].replaceWith(spanSave);

    let editButton = document.createElement('button')
    editButton.textContent = 'Edit';
    editButton.setAttribute('onclick', 'editfunction(this)');
    el.parentNode.children[3].replaceWith(editButton);
}
    
function editfunction(el) {
    let textToEdit = el.parentNode.children[1].textContent;
    let editBox = document.createElement('input');
    editBox.value = textToEdit;
    el.parentNode.replaceChild(editBox, el.parentNode.children[1])

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save';
    saveButton.setAttribute("onclick", "save(this)")
    el.parentNode.children[3].replaceWith(saveButton);
}


