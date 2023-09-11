<template>
  <div id="root">
    <div class="innerBox">
      <AddToDo @newTask="receive"></AddToDo>
      <!-- <ItemList :todos="todos" :todoStatus="changeStatus" :delTask="delTask"></ItemList> -->
      <ItemList :todos="todos"></ItemList>
      <FinishItem :todos="todos"></FinishItem>
      <!-- <FinishItem :todos="todos" @selectAll="selectAll" @delTask="delTask"></FinishItem> -->
    </div>
  </div>
</template>

<script>
  import AddToDo from './components/AddToDo.vue'
  import ItemList from './components/ItemList.vue'
  import FinishItem from './components/FinishItem.vue'

  export default {
    name: 'App',        // 自定义组件标签的名字
    components: {AddToDo, ItemList, FinishItem},
    data(){
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    mounted(){
      // 删除任务
      this.$bus.$on('delTask', (id)=>{
        this.todos.forEach((item) => {
          if(item.id == id){
            // console.log(this.todos.indexOf(item));
            this.todos.splice(this.todos.indexOf(item), 1);
          }
        });
      });
      // 修改任务完成状态
      this.$bus.$on('changeChecked', (id)=>{
        this.todos.forEach((item) => {
          if(item.id == id){
            item.done = !item.done;
          }
        });
      });
      // 勾选全选框
      this.$bus.$on('selectAll', (all)=>{
        this.todos.forEach((e)=>{
          e.done = all;
        });
      });
    },
    beforeDestroy(){
      this.$bus.$off(['delTask', 'changeChecked', 'selectAll'])
    },
    methods: {
      // 新建任务
      receive(task){
        this.todos.unshift(task);
      },
      // 修改任务完成状态
      /* changeStatus(id){
        this.todos.forEach((item) => {
          if(item.id == id){
            item.done = !item.done;
          }
        });
      }, */
      // 删除任务
     /*  delTask(id){
        this.todos.forEach((item) => {
          if(item.id == id){
            // console.log(this.todos.indexOf(item));
            this.todos.splice(this.todos.indexOf(item), 1);
          }
        });
        // 过滤器写法
        // this.todos = this.todos.filter((todo) =>{
        //   return todo.id != id
        // })        
      }, */
      /* selectAll(all){
        this.todos.forEach((e)=>{
            e.done = all;
          });
      } */
    },
    watch: {
      todos: {
        deep: true,
        handler(newVal, oldVal){
          localStorage.setItem('todos', JSON.stringify(newVal));
        }
        
      }
    },
  }
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root{
    width: 460px;
    border: 1px solid #b5b3b3;
    padding: 10px 20px;
    box-shadow: 2px 2px 7px 3px gray;
    text-align: center;
    margin: 50px auto;
    border-radius: 10px;
  }
  .innerBox{
    width: 420px;
    border: 0.8px solid #bbb0b0;
    border-radius: 2px;
    padding: 10px;
    text-align: center;
  }
</style>