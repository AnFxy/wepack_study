<template>
  <div class="container">
    <text class="txt-home">{{ title }}</text>
    <img class="img-wrap" :src="computerImg" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '这是阿云的标题',
      computerImg: require('../images/computer.jpg'),
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.txt-home {
  font-size: 50px;
  color: red;
  line-height: 75px;
  text-decoration: underline;
  text-decoration-color: antiquewhite;
}
.img-wrap {
  width: 244px;
  height: 872px;
  background-color: #f0f0f0;
}
</style>