<template>
  <ul class="list">
    <ToDoItem 
      v-for="todoObj in todos" 
      :key="todoObj.id" 
      :detail="todoObj">
      <!-- :changeStatus="todoStatus"
      :delTask="delTask" -->
    </ToDoItem>
  </ul>
</template>

<script>
  import ToDoItem from './ToDoItem.vue'

  export default {
    name: 'ItemList',
    components: {ToDoItem},
    // props: ['todos', 'todoStatus', 'delTask']
    props: ['todos']
  }
</script>

<style lang="css" scoped>
  .list {
    list-style: none;
  }
</style>