<template>
  <div class="footer" v-show="todos.length !== 0">
    <label>
      <input type="checkbox" v-model="isAll">
      <!-- isAll为计算属性，无法合并checked和checkAll并直接舒勇isAll作为判断，解决办法:为isAll手动创建getter和setter -->
      <!-- <input type="checkbox" :checked="isAll" @click="checkAll"> -->
      <p>已完成{{ finished }} / 全部 {{ total }}</p>
      <!-- <p :showData="showData(toFooter)">已完成{{ finished }} / 全部 {{ total }}</p> -->
    </label>
    <button @click="cleanFinished">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: 'FinishItem',
    methods: {
      cleanFinished(){
        if(confirm("是否确认清空所有已完成任务?")){
          let ids = this.todos.filter(function(val){
            return val.done;
          });
          // console.log(ids);
          ids.forEach(e => {
            this.$bus.$emit('delTask', e.id);
            // this.$emit('delTask', e.id);
            // this.delTask(e.id);
          });
        }
      },
      // 汇总任务完成情况
      /* showData(todos){
        // console.log(todos);
        this.total = todos.length;
        let counter = 0;
        todos.forEach((e)=>{
          if(e.done){
            counter++;
          }
        });
        this.finished= counter;
      }, */
      /* checkAll(e){
        // console.log(e.target.checked);
        // this.$emit('selectAll', e.target.checked);           // 失效
        this.selectAll(e.target.checked);
      } */
    },
    computed: {
      total: function(){
        return this.todos.length;
      },
      finished: function(){
        return this.todos.reduce((pre, curt) => pre + (curt.done ? 1 : 0), 0);
      },
      isAll: {
        get(){
          return this.finished === this.total && this.total > 0;
        },
        set(val){
          // console.log(val);
          // this.selectAll(val);
          this.$bus.$emit('selectAll', val);
          // this.$emit('selectAll', val);
        }
      }
    },
    // props: ['todos', 'selectAll', 'delTask'],
    props: ['todos']
    
  }
</script>

<style lang="css" scoped>
  .footer {
    margin: 30px 0 10px;
    height: 20px;
  }

  .footer label {
    float: left;
    cursor: pointer;
  }

  .footer input {
    float: left;
    margin-top: 3px;
  }
  .footer p {
    /* float: left; */
    margin-left: 30px;
    font-size: 13px;
    text-align: center;
  }

  .footer button {
    float: right;
    margin-right: 3px;
    width: 100px;
    height: 22px;
    border: 0.6px solid #a3a3a3;
    border-radius: 3px;
    background-color: rgb(199, 2, 2);
    font-size: 12px;
    color: #fff;
    text-align: center;
  }
</style>