import { ProxyState } from "../AppState"


export default class List{
    constructor({ color, title, tasksComplete, id = generateId()}){
        this.color = color
        this.title = title
        this.tasksComplete = tasksComplete
        this.id = id
    }

    get Template() {
        return `
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <div>
                        ${this.listsTasks}
                    </div>
                    </div>
                </div>
            </div>
        `
    }

    get listsTasks(){
        let template = ''
        let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
        tasks.forEach(t => {
            template+= t.Template
        });
        template += 
        `<ul class="list-group">
            <li class="list-group-item">
            <input id="box" aria label="check box" type="checkbox" onclick="app.tasksController.checked(this.checked, '${this.id}')" ${this.checked ? 'checked' : '' }
                >${this.name} 
                <i class="fas fa-times ml-2 text-danger"
                onclick="app.tasksController.deleteTask('${this.id}')">
                </i>
            </li>
        </ul>`
        if (!template){
            template += "No Tasks Listed"
        }
        return template
    }
}