<template>
  <li class="item">
    <label>
      <input 
        type="checkbox" 
        :checked="detail.done" 
        @click="verifyStatus(detail.id)">
      <p :style="lineThrough(detail) ">{{ detail.dscrp }}</p>
    </label>
    <button @click="btnDelete(detail.id)">移除</button>
  </li>
</template>

<script>
  export default {
    name: 'ToDoItem',
    methods: {
      btnDelete(id){
        if(confirm("是否确认删除此任务？")){
          // this.delTask(id);
          // this.$emit('delTask', id);
          this.$bus.$emit('delTask', id);
        }
      },
      verifyStatus(id){
        this.$bus.$emit('changeChecked', id);
        // this.changeStatus(id);
        // this.$emit('todoStatus', id)

        // this.detail.done = !this.detail.done;           // props只读，不建议此写法
        // this.line = (this.line === "none" ? "line-through" : "none");
        // console.log(status);
      },
      lineThrough(todoObj){
        if(todoObj.done){
          return "{textDecoration: 'line-through'}";
        }
      }
    },
    // props: ['detail', 'changeStatus', 'delTask']
    props: ['detail']
  }
</script>

<style lang="css" scoped>
  .item {
    width: 400px;
    height: 30px;
    border: 0.8px solid #bbb0b0;
    
    padding-left: 5px;
    /* top: -1; */
  }
  .item label {
    /* float: left; */
    cursor: hand;
    /* clear: both; */
  } 
  .item:hover {
    background-color: #c9c9c9;
  }

  .item:hover button {
    display: block;
  }

  .item:hover button:hover {
    background-color: #f11;
    cursor: pointer;
  }

  .item input {
    float: left;
    /* padding-right: 5px; */
    margin-top: 9px;
    /*margin: 0 auto;                      浮动后不在生效 */
    /*vertical-align: middle;              浮动后不在生效 */
    position: relative;
    /* top: -1px; */
  }

  .item p{
    float: left;
    height: 30px;
    line-height: 30px;
    margin-left: 5px;
    font-size: 13px;
  }

  .item button{
    float: right;
    margin: 3px 3px 0 0;
    width: 50px;
    height: 22px;
    display: none;
    border: 0.6px solid #a3a3a3;
    border-radius: 3px;
    background-color: rgb(199, 2, 2);
    cursor: hand;
    font-size: 12px;
    color: #fff;
    text-align: center;
  }

</style>