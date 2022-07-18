let searchBar = document.getElementById('search')

let deleteButtons = document.getElementsByClassName('delete-button'); 

let header = document.getElementsByClassName('header-container')

let addTaskButton = document.getElementById('add-task')

let addTaskBox = document.getElementById('add-task-box')

let editButtons = document.getElementsByClassName('color')

let lis = document.getElementsByTagName('li') //this gives a html collection and not a normal array

//Turn the HTML collection to an array 
let lisArr = Array.from(lis)

let addedTasksContainer = document.querySelector('.task-container')

//wordings added as tasks
let taskNames = document.getElementsByClassName('name')


//convert the taskNames into an array
let taskNamesArr = Array.from(taskNames)

// add a task number to each task
for (let i =0; i < taskNamesArr.length; i++) {
    taskNamesArr[i].textContent += ` (Task ${i + 1})`
}


