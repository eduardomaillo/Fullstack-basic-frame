$(document).ready(() => {

  // Helper functions //
  function appendToList(tasks) {
    const ul = document.getElementById('task-list');
    for (let i = 0; i < tasks.length; i += 1) {
      const li = document.createElement('li')
      const button = document.createElement('button')
      $(li).attr('id', i)
      $(li).text(tasks[i].item)
      $(button).addClass('remove')
      $(button).attr('id', tasks[i]._id)
      $(button).text('X')
      li.appendChild(button)
      ul.appendChild(li)
    }
  }

  function reload() {
    $('li').remove();
    fetch('/retrieveTasks')
    .then(res => {
      return res.json()
    })
    .then(jsonData => {
      appendToList(jsonData)
    });
  }  

  // on click buttons functionality //
  $('#retrieve').on('click', () => {
  reload()
  });

  $('#task-button').on('click', () => {
    const task = $('#task').val()
    if (task) {
        fetch('/insertTask', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({item: task})
      })
      .then(res => {
        reload()
      })
      .then($('#task').val(''))
    }  
  });

  $('#task-list').on('click', '.remove', (e) => {  
    const id = e.target.id
    fetch('/removeTask', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({_id: id})
    })
    .then(res => {
      reload()
    })
  })
  
});