<template>
  <div class="container">
      <left-side 
        :left-show="leftshow"
        @on-left-show="onleftShow">
      </left-side>
      <div class="right">
        <nav-bar 
        :show-left="leftshow"
        @on-left-show="onleftShow"></nav-bar>
        <div class="header-view">
          <h2>To-Do</h2>
          <span>{{dateTime.toLocaleString()}}</span>
        </div>
        <div class="cards">
          <a :href="'#/detail/'+item.id" 
          class="card" 
          v-for="(item, index) in todolist">
            <i @click="changeDone(item,$event,index)"
             :class="['fa c-uncheck',{'c-check': item.done}]" aria-hidden="true"></i>
            <span>{{item.title}}</span>
          </a>
        </div>
        <div class="add">
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
          <span>添加待办事项</span>
        </div>
      </div>
  </div>
</template>

<script>
import NavBar from '../components/navBar.vue'
import LeftSide from '../components/leftSide.vue'

export default {
  name: 'Mobile',
  data () {
    return {
      leftshow: false,
      dateTime: new Date(),
      checked: true,
      todolist: this.$store.state.todolist
    }
  },
  methods: {
    onleftShow (val){
      this.leftshow = val
    },
    changeDone (item,event,index){
      item.done = !item.done

      // this.todolist.splice(index,1)
      event.stopPropagation()
      event.preventDefault()
    }
  },
  mounted() {
  },
  watch: {
  },
  components:{
    NavBar,
    LeftSide
  }
}
</script>
<style scoped>
.add{
  height: 50px;
  background-color: white;
  box-shadow: 0 -1px 1px 1px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #0066CC;
}
.add i{
  font-size: 22px;
}
.add span{
  margin-left: 10px;
}
.c-uncheck{
  width: 25px;
  height: 25px;
  background-color: #EEEEEE;
  margin-right: 6px;
  border-radius: 15px;
  box-shadow: 0 0 2px 2px #AAAAAA inset;
}
.c-check{
  background-color: green;
  box-shadow: none;

}
.cards{
  display: flex;
  flex: auto;
  flex-direction: column;
  padding: 10px;
}
.card{
  height: 60px;
  background-color: white;
  background: linear-gradient(to bottom, white, #E4E4E4 , white);
  border-radius: 3px;
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0 10px;
  color: black;
  box-shadow: 0 0 1px 1px rgba(0,0,0,0.2);
}
.card + .card{
  margin-top: 10px;
}
.card span{
  font-size: 20px;
  flex: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.header-view{
  height: 120px;
  background-size: cover;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 6px 12px;
}
.header-view h2{
  margin: 0;
  color: white;
  font-size: 30px;
}
.header-view span{
  color: white;
}
.right{
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
    background:repeat url(../assets/bb.jpg);
    
    /*background-size: cover;*/
}

</style>