export default class Task{
    constructor({ name, listId, id = generateId()}){
        this.name = name 
        this.listId = listId
        this.id = id
    }

    getTemplate(){
        return `<li>${this.name}
         <span class="action" onclick="app.listsController.removeTask('${this.id}')">x</span></li>`
    }
}