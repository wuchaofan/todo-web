<template>
  <div class="detail">
    <div class="bar">
        <a href="#/">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  data () {
    return {
    }
  },
  props: [],
  methods: {
  },
  mounted() {
  },
  watch: {
  }
}
</script>
<style scoped>
.detail{
    display: flex;
    flex-direction: column;
    background-color: #EEEEEE;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(#DDDDDD, white);
}
.bar{
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 30px;
    padding: 0 10px;
    background: linear-gradient(#DDDDDD, #BABABA);

}
.bar a{
  color: white;

}
</style>