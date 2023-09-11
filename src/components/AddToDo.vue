<template>
  <div class="add">
    <h3>To Do List</h3>
    <input type="text" placeholder="输入创建新待办" v-model="content" @keyup.enter="create">
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'

  export default {
    name: 'AddToDo',
    data(){
      return {
        content: "",
      }
    },
    methods: {
      create(){
        // event: 事件对象，  event.target：事件对象元素<input>
        //console.log(event.target);  
        if(!this.content.trim())            // trim()清除前后空字符
          return;
        const todoObj = {id: nanoid(), dscrp: this.content, done: false};
        // this.newTask(todoObj);
        this.$emit('newTask', todoObj);
        this.content = "";
      },
    },
    // props: ['newTask']
  }
</script>

<style lang="css" scoped>
  .add h3 {
    margin-bottom: 10px;
  }
  .add input {
    padding-left: 5px;
    width: 400px;
    height: 30px;
    border: 0.8px solid #bbb0b0;
    border-radius: 3px;
    outline: none;
    margin-bottom: 15px;
    color: #3d3b3b;
    font-size: 13px;
    /* box-shadow: 2px 2px 7px 3px gray; */
  }
  .add input:focus {           /* 聚焦时生效 */
    border-color: rgba(17, 120, 247, 0.978);
    box-shadow: 0px 0px 3px 2px rgba(17, 120, 247, 0.978);
  }
</style>