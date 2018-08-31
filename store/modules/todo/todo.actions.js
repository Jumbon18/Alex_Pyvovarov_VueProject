import { ADD_TODO, EDIT_TODO, TOGGLE_DONE, DELETE_TODO, SET_PRICE } from './todo.mutation-types'
export default {
  addTodo({commit},todo){
    commit(ADD_TODO,todo);
  },
  deleteTodo({commit},id){
    commit(DELETE_TODO,id);
  },
  editTodo({commit},todo){
    commit(EDIT_TODO,todo);
  },
  toggleDone({commit},id){
    commit(TOGGLE_DONE,id);
  },
  setPrice({commit},priceDate){
    commit(SET_PRICE,priceDate);
    return true;
  }
}
