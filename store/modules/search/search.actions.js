import {SET_QUERY} from "./search.mutation-types";
export default {
  setQuery({commit},query){
    commit(SET_QUERY,query)
  }


}
