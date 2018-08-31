import{SET_QUERY} from "./search.mutation-types";

export default {
  [SET_QUERY](state,query){
    state.query=query;
  }
}
