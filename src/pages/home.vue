<template>
  <div>
      <div class="left">
        <div class="repos" >
            <a :class="['repo',{'repo-active': item.active}]" 
            v-for="item in repos" 
            :key="item.id"
            href="#">
             <span>{{item.slug}}</span>
            </a>
        </div>
      </div>
      <div clas="right">

      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        repos: []
    }
  },
  mounted() {
    this.$http.get('/repos').then(response => {
      // get body data
      console.log(response.body.repositories)
      this.repos = response.body.repositories
    }, response => {
      // error callback
      console.log(response)
    });
  },
  watch: {
  }
}
</script>
<style scoped>

.repos{
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
.repo{
  height: 50px;
  background-color: #F4F4F4;
  text-decoration: none;
  display: flex;
  box-sizing: border-box;
  border-left: 6px solid lightgray;
  padding-left: 5px;
  align-items: center;
  color: black;
}
.repo-active{
  border-left: 6px solid green;
  color: green;
}
.repo + .repo{
  margin-top: 2px;
}
 .left{
     width: 300px;
     height: 100%;
     position: fixed;
     left: 0;
     top: 0;
     background-color: #EEEEEE;
     box-shadow: 1px 0 1px 1px rgba(0,0,0,0.2);
     overflow: auto;
 }
</style>