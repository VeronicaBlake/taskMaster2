import { ProxyState } from "../AppState.js";
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService{
    //passed rawList and called function from the controller
    createList(rawList){
        //NOTE I forget why we do the ellipses at the beginning of the array
        ProxyState.lists = [...ProxyState.lists, new List(rawList)]
    }
    
    destroyList(id){
        //PS.lists will now equal
        //PS.lists whose ids are not equal to the id passed to this function
        ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    }

    addTask(rawTask){
        ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
    }

    removeTask(id){
        ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
    }
}

export const listsService = new ListsService()