<template>
  <div class="pc">
      <div class="left">
        <div class="tasks" >
            <a href="#" :class="['task',{'active': item.done}]" v-for="(item, index) in list">
                <span>{{item.title}}</span>
                <i v-if="item.done" class="fa fa-check-circle" aria-hidden="true"></i>
            </a>
            <a href="#" class="add">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                <span>添加待办事项</span>
            </a>
        </div>
      </div>
      <div class="right">
        <div class="row">
            <div class="card">

            </div>
            <div class="card">

            </div>
            <div class="card">

            </div>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'PcPage',
  data () {
    return {
        list:  this.$store.state.todolist
    }
  },
  mounted() {
    // this.$http.get('/repos').then(response => {
    //   // get body data
    //   console.log(response.body.repositories)
    //   this.repos = response.body.repositories
    // }, response => {
    //   // error callback
    //   console.log(response)
    // });
  },
  watch: {
  }
}
</script>
<style scoped>

.add{
  height: 50px;
  margin-top: 10px;
  background-color: white;
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

.tasks{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 10px;
}
.task{
    text-decoration: none;
    color: black;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 0 10px;
    border-left: 10px solid lightgrey;
    justify-content: space-between;
    /*box-shadow: 0 0 1px 1px lightgray;*/
    /*border-radius: 4px;*/
}

.task +.task{
    margin-top: 10px;
}
.task i{
    color: #99CC66;
    font-size: 24px;
}
.task span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.active{
    border-left: 10px solid #99CC66;
}
.pc{
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #FFCCCC, #99CCCC);
    display: flex;
}
 .left{
     width: 300px;
     height: 100%;
     left: 0;
     top: 0;
     background-color: rgba(0,0,0,0.5);
     box-shadow: 1px 0 1px 1px rgba(0,0,0,0.2);
     overflow: auto;
 }
 .right{
     flex: auto;
     height: 100%;
     box-sizing: border-box;
     padding: 20px;
 }
 .row{
     display: flex;
     justify-content: space-between;
     height: 100%;
 }
 .row + .row{
     margin-top: 20px;
 }
 .card{
     flex: auto;
     height: 100%;
     background-color: rgba(255,255,255,0.8);
     border-top: 6px solid #99CC66; 
     /*3*/
     box-shadow: 0 0 6px 1px gray;
     border-radius: 3px;
     animation: moveshow 0.6s;

 }
 @keyframes moveshow{
     0%{
         transform: translate(-50px);
     }
     100%{
         transform: translate(0);

     }
 }
 .card:nth-child(3n+2){
     border-top: 6px solid #99CCCC; 
     /*2*/

 }
  .card:nth-child(3n+1){
     border-top: 6px solid #FF6666;

 }
 .card + .card{
     margin-left: 20px;
 }
</style>