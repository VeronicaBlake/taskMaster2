import { generateId } from "../Utils/GenerateId.js"

export default class List{
    constructor({ color, title, id = generateId()}){
        this.color = color
        this.title = title
        this.id = id
    }

     get Template() {
    return `
    <div class="card">
      <div class="card-header ${this.color}">
        <h5 class="card-title mb-0">${this.title}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Here's where checkboxes will go</p>
      </div>
    </div>`
  }

    get listsTasks(){
        let template = ''
        let tasksTotal = 0
        let tasks = ProxyState.tasks.filter(task => task.listId === this.id)
        tasks.forEach(t => {
            template += t.Template
        })
        template += 
        `<input id="box" aria label="check box" type="checkbox" 
              onclick="app.tasksController.checked(this.checked, '${this.id}')" 
              ${this.checked ? 'checked' : '' }
                >${this.name}<i class="fas fa-times ml-2 text-danger"
                onclick="app.tasksController.deleteTask('${this.id}')"></i>`
        template += `<li>${tasksTotal}</li>`
        if (!template){
            template += "No Tasks Listed"
        }
        return template
    }
}


// `<ul class="list-group">
//             <li class="list-group-item">
//               <input id="box" aria label="check box" type="checkbox" 
//               onclick="app.tasksController.checked(this.checked, '${this.id}')" 
//               ${this.checked ? 'checked' : '' }
//                 >${this.name}<i class="fas fa-times ml-2 text-danger"
//                 onclick="app.tasksController.deleteTask('${this.id}')"></i>
                
//             </li>
//         </ul>`