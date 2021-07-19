import { ProxyState } from "../AppState.js";
import List from "../Models/List.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js";

class ListsService{
    //passed rawList and called function from the controller
    createList(rawList){
        //NOTE I forget why we do the ellipses at the beginning of the array
        ProxyState.lists = [...ProxyState.lists, new List(rawList)]
    }
    
    destroyList(id){
        //PS.lists will now equal
        //PS.lists whose ids are not equal to the id passed to this function
        if(window.confirm('Delete this List?'))
        ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    }

    addTask(rawTask){
        ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
    }

    removeTask(id){
        if(window.confirm('Delete this task?'))
        ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
    }
     checked(bool, id){
      ProxyState.tasks.find(i => i.id === id).checked = bool
      saveState()
      ProxyState.tasks = ProxyState.tasks
    }
}

export const listsService = new ListsService()