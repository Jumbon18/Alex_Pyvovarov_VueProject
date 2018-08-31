import {ADD_BASKET} from "./basket.mutation-types";
export default {
  addBasket({commit},basket){
commit(ADD_BASKET,basket);
  }
}
