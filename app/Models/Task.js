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
    return `<ul class = "list-group">
      <li class = "list-group-item"><input id = "box" type="checkbox"
                    onclick="app.listsController.checked(this.checked, '${this.id}')" ${this.checked ? 'checked' : ''}> 
      ${this.name} <i class="fas fa-times ml-2 text-danger" onclick="app.listsController.removeTask('${this.id}')"></i>
      </li>
      </ul>`
    }
}