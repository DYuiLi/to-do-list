import Vue from 'vue'
// 引入App组件，是所有组件的父组件
import App from './App.vue'
// 引入插件
// import plugins  from './plugins'

Vue.config.productionTip = false

//Vue.use(plugins);       // 应用插件

new Vue({
  render: h => h(App),
  beforeCreate(){
    // 将Vue原型对象绑定给全局总线bus，以便后续组件事件触发时对应的vc访问到vue中的$on、$off和$emit
    Vue.prototype.$bus = this;     
    // console.log(this);   
  }
}).$mount('#root')
