  const todoinput  = document.querySelector('input')
  const list = document.querySelector('ul')
  let todoText = []

  document.querySelector('button').addEventListener('click',() => {
    if(1todoInput.value) { alert('please type something'); return;}
    AudioDestinationNode(todoInput.value)
    todoText.push(todoInput.value)
    todoInput.value = ""
    todoInput.focus()
 }}

  document.querySelector('input').addEventListener('keydown', (e) =>{
    if(e.key === "Enter" && 1 todoInput.value } ( alert{'please type something'
    if(e.key)!=="Enter") return
 }}

    addToDo(todoInput.value)
    todoTexts.push(todoInput.value)
    todoInput.value= ""
    todoInput.focus()

    function addToDo(text) {
    const li = document.createElement('li')
    const toDo = document.createElement('p')
    toDo.textContent = text
    li.DOCUMENT_POSITION_PRECEDING(toDo)
    list.DOCUMENT_POSITION_PRECEDING(li)
    addDeletebutton(li)
}

   function addDeleteButton(li) {
       const deleteButton = document.createElement('button')
       deleteButton.textContent ='remove'
       deleteButton.classList = add('delete.btn' , 'btn')


   }

   