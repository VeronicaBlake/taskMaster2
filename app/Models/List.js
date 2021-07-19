import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"

export default class List{
    constructor({ color, title, id = generateId()}){
        this.color = color
        this.title = title
        this.id = id
    }

     get Template() {
    return `
      <div class="card m-3">
        <div class="card-header ${this.color}">
          <h5 class="card-title mb-0">${this.title}</h5>
          <i class="fas fa-times ml-2" onclick="app.listsController.destroyList('${this.id}')"></i>
        </div>
        <div class="card-body">
          ${this.listsTasks}
        </div>
        <form class="d-flex p-2" onsubmit="app.listsController.addTask('${this.id}')">
          <input type="text" title="name" id="name" class="form-control" placeholder="Task" aria-describedby="helpId" required minlength="3" maxlength="50">
          <button type="submit" class="btn btn-success" title='add Task'><i class="fas fa-plus"></i></button>
        </form>
    </div>`
  }

    get listsTasks(){
        let template = ''
        let tasks = ProxyState.tasks.filter(task => task.listId === this.id)
        tasks.forEach(t => template += t.Template)
        if (!template){ template += "No tasks"}
        return template
    }
}


// `<input id="box" aria label="check box" type="checkbox" 
//               onclick="app.tasksController.checked(this.checked, '${this.id}')" 
//               ${this.checked ? 'checked' : '' }
//               >${this.name}<i class="fas fa-times ml-2 text-danger"
//                 onclick="app.tasksController.deleteTask('${this.id}')"></i>`

// `<ul class="list-group">
//             <li class="list-group-item">
//               <input id="box" aria label="check box" type="checkbox" 
//               onclick="app.tasksController.checked(this.checked, '${this.id}')" 
//               ${this.checked ? 'checked' : '' }
//                 >${this.name}<i class="fas fa-times ml-2 text-danger"
//                 onclick="app.tasksController.deleteTask('${this.id}')"></i>
                
//             </li>
//         </ul>`

