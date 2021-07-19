import { generateId } from "../Utils/GenerateId.js"

export default class Task{
    constructor({ name, listId, id = generateId(), completed, checked}){
        this.name = name 
        this.listId = listId
        this.id = id
        this.completed = completed
        this.checked = checked
    }

    get Template(){
        return `<li>${this.name}
         <span class="action" onclick="app.listsController.removeTask('${this.id}')">x</span></li>`
    }
}