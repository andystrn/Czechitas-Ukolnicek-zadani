console.log('funguju!');

const Task = ({name, due, done}) => {

    let doneClass = '';
    let doneSign = '';
    if (done) {
        doneClass = 'task__done';
        doneSign = '✓'; 
    } 
    
    return `
        <div class="task">
            <div class="task__body">
                <div class="task__name">${name}</div>
                <div class="task__due">${due}</div>
            </div>
            <div class="${doneClass}">${doneSign}</div>
        </div>
    `
};

const renderTasks = (items) => {
    document.querySelector('.todo__tasks').innerHTML = items
    .map((item) => Task(item))
    .join('') 
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
.then((response) => response.json())
.then(renderTasks);

const checkElm = document.getElementById('checkbox-undone');
checkElm.addEventListener('change', (event) => {
  if (checkElm.checked) { 
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false')
    .then((response) => response.json())
    .then((data) => renderTasks(data));
    } 

  else {
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
    .then((response) => response.json())
    .then((data) => renderTasks(data));
    }
});