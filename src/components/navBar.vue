<template>
  <div class="bar">
      <a class="left-icon" @click="lefttraggle=!lefttraggle">
          <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
        lefttraggle: false
    }
  },
  props: ['showLeft'],
  methods: {
  },
  mounted() {
  },
  watch: {
      showLeft (val){
        this.lefttraggle = val
      },
      lefttraggle (val){
          this.$emit('on-left-show', val)
      }
  }
}
</script>
<style scoped>
.left-icon{
    font-size: 28px;
    color: white;
}
.bar{
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    top: 0;
}
</style>