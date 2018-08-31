
  <template>
    <main>
      <div class="mb-5 mt-5">
        <form class="form-inline" @submit.prevent="onSubmitForm">
          <input class="form-control mr-sm-2 full" v-model="title" type="search" placeholder="ToDo title">
          <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Add</button>
        </form>

      </div>

      <div class="list-group">
        <ToDoItem v-for="todo of todoList" :key="todo.id" :todo="todo" @delete="onDelete" @done="onToggleDone" @edit="onEdit"/>

      </div>
      <div class="mt-5 result">
        <h4>Total Price: {{ totalPrice }} UAH</h4>
      </div>
    </main>
  </template>




<script>
  import ToDoItem from "../components/ToDoItem";
  import { mapGetters, mapActions } from 'vuex'
  export default {
  components: {
    ToDoItem
  },
    data(){
    return{
      title:''
    }
    },
    computed: {
      ...mapGetters({
        todoList: 'Todo/getTodoList',
      }),
      totalPrice() {
        return this.todoList
          .filter(todo => todo.price > 0)
          .reduce(( sum, todo ) => sum += parseFloat(todo.price), 0)
      }
    },
    methods: {
      ...mapActions({
        addTodo: 'Todo/addTodo',
        onEdit: 'Todo/editTodo',
        toggleDone: 'Todo/toggleDone',
        deleteTodo: 'Todo/deleteTodo',
        setPrice: 'Todo/setPrice'
      }),
      onSubmitForm() {
        this.addTodo({
          title: this.title,
          done: false
        });
        this.title = '';
      },
      async onToggleDone(id) {
        let price = parseFloat(prompt('Input price', ''));
        if(!isNaN(price)) {
          await this.setPrice({ id, price });
          this.toggleDone(id);
        }
      },
      onDelete(id) {
        if(confirm('Are you sure?')) {
          this.deleteTodo(id);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.full{
  width:93%;
}
  .result{
    width:250px;
    height: 58px;
    padding-top:15px;
    margin-left:680px;
   text-align: center;
    color: whitesmoke;
    font-size: 14px;
    border-radius: 7px;
    background: lighten(#343a40,10);
  }
</style>


