import { ADD_TODO, EDIT_TODO, TOGGLE_DONE, DELETE_TODO, SET_PRICE } from './todo.mutation-types'
import uuid from "uuid/v4";
export default {
  [ADD_TODO](state,todo){
todo.id=uuid();
todo.price=0;
    state.todoList = state.todoList.concat(todo);
  },
  [EDIT_TODO](state,newTodo){
    state.todoList = state.todoList.map(todo => {
      if(todo.id === newTodo.id) {
        todo = Object.assign({}, todo, newTodo);
      }
      return todo;
    });
  },
  [TOGGLE_DONE](state,id){
    state.todoList = state.todoList.map(todo => {
      if(todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
  },
  [DELETE_TODO](state,id){
    state.todoList=state.todoList.filter(todo=>todo.id!==id);
  },
  [SET_PRICE](state,{price,id}){
    state.todoList=state.todoList.map(todo=>{
      if(todo.id===id){
        todo.price=price;
      }
      return todo;
    });
  }
}
