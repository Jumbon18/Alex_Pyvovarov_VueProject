import state from "./todo.state"
import getters from "./todo.getters"
import actions from "./todo.actions"
import mutations from './todo.mutations'
export default {
  namespaced:true,
state,
  getters,
  actions,
  mutations
}
