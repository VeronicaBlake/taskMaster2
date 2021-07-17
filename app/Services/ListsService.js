import { ProxyState } from "../AppState.js";


class ListsService{
    //passed rawList and called function from the controller
    createList(rawList){
        //NOTE I forget why we do the ellipses at the beginning of the array
        ProxyState.lists = [...ProxyState.lists, newList(rawList)]
    }
    
}