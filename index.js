console.log('funguju!');

const Task = (props) => {
    {name, due, done} = props;

    let doneClass = '';
    const doneSign = '';
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
        <div class=${doneClass}>${doneSign}</div>
      </div>
    `
}

const renderTasks = (items) => {
    document.querySelector('.todo__tasks').innerHTML = items
    .map((item) => Task(item))
    .join('') 
}