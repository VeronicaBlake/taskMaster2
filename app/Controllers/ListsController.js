import { ProxyState } from "../AppState"

function _draw() {
let template = ''
let lists = ProxyState.lists
  lists.forEach(list => template += list.Template)
  document.getElementById('lists').innerHTML = template
}

export default class ListController{
    constructor() {
        ProxyState.on('lists', _draw)
    }

    createPizza(){
        //prevents the page from reloading when form is submitted
        event.preventDefault()
        //gives the form submission a name 
        let form = event.target
        //creates an object accessing the properties on the form, formats for the service 
        let rawList = {
            color = form.color.value, 
            tasks = form.tasks.value,
            tasksComplete = form.tasksComplete.value
        }
        //passes formatted item to service 
        listsService.createList(rawList)
        //clears the form after the function runs
        form.reset

    }
}

