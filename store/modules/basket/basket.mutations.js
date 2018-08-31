import {ADD_BASKET} from "./basket.mutation-types";
import uuid from "uuid/v4";
export default {
  [ADD_BASKET](state,basket){
state.basketList=state.todoList.map(todo=>{
  basket.title=todo.title;
});
state.basketList=state.basketList.concat(basket);
  }
}
