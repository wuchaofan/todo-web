<template>
  <div :class="['left',{'left-show': leftdisplay}]">
    <div class="tasks" >
        <div class="top-div">
            <img src="../assets/user.png" alt="">
            <span>chaofan</span>
        </div>
        <div class="menu-list">
            <!--<a @click="active=0" :class="['item-menu',{'item-active': active==0}]">
                <i class="fa fa-sun-o mytoday" aria-hidden="true"></i>
                <span>我的一天</span>
            </a>-->
            <a @click="active=1" :class="['item-menu',{'item-active': active==1}]">
                <i class="fa fa-thumb-tack mytodo" aria-hidden="true"></i>
                <span>To-Do</span>
            </a>
        </div>
    </div>
    <div class="close" @click="leftdisplay=!leftdisplay">
        <i class="fa fa-angle-double-left" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftSide',
  data () {
    return {
        leftdisplay: false,
        active: 1
    }
  },
  props: ['leftShow'],
  methods: {
      
  },
  mounted() {
  },
  watch: {
    leftShow (val){
        console.log('uuu: ', val)
        this.leftdisplay = val
    },
    leftdisplay (val){
          this.$emit('on-left-show', val)
    }
  }
}
</script>
<style scoped>
.mytoday{
    color: red;
    width: 35px;
}
.mytodo{
    color: red;
    width: 35px;
    font-size: 23px;
}
.menu-list{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 10px; 
}
.item-menu{
    color: black;
    text-decoration: none;
    font-size: 20px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    padding: 4px 0;
    border-radius: 4px;
}
.item-menu span{
    margin-left: 6px;
}
.top-div{
    display: flex;
    padding: 8px 10px;
    align-items: center;
}
.top-div img{
    width: 35px;
    height: 35px;
    margin-right: 10px;
}
.tasks{
    flex: auto;    
    background-color: #EFEFEF;
    box-shadow: 1px 0 1px 1px rgba(0, 0, 0, 0.3);
}
.close{
    width: 60px;
    background-color: rgba(0,0,0,0.4);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
}
.left{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
    transition: all 0.5s;
    transform: translate(-100%);
    z-index: 4;
  }
.left-show{
  transform: translate(0);
}
.item-menu:active{
    background-color: #CCFFFF;
}
.item-active{
    background-color: #CCFFFF;
}
</style>