import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
let template = ''
let lists = ProxyState.lists
  lists.forEach(list => template += list.Template)
  document.getElementById('lists').innerHTML = template
}

export default class ListController{
    constructor() {
        ProxyState.on('lists', _draw)
        ProxyState.on('lists', saveState)

        loadState()
    }

    createList(){
        //prevents the page from reloading when form is submitted
        event.preventDefault()
        //gives the form submission a name 
        let form = event.target
        //creates an object accessing the properties on the form, formats for the service 
        let rawList = {
            color: form.color.value, 
            title: form.title.value
        }
        //passes formatted item to service 
        listsService.createList(rawList)
        //clears the form after the function runs
        form.reset()

    }

    destroyList(id){
        listsService.destroyList(id)
    }

    addTask(listId){
        //this will be triggered on the task form submit 
        event.preventDefault()
        let form = event.target
        let rawTask = {
            listId, 
            name: form.task.value
        }
        listsService.addTask(rawTask)
        form.reset()
    }

    removeTask(id){
        listsService.removeTask(id)
    }
}

